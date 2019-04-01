const fs = require('fs');
const filePath = 'db/task.json';

const save = (data) => {
  const objData = { info: data, status: false }
  return new Promise((resolve, reject) => {
    read().then(data => {
      const dataArr = JSON.parse(data);
      if (dataArr.find(d => d.info === objData.info))
        reject(`ERROR => Task ${objData.info} already exists!`);
      else {
        objData.id = dataArr.length === 0 ? 1 : dataArr[dataArr.length - 1].id + 1;
        dataArr.push(objData);
        resolve(write(dataArr));
      }
    })
      .catch(err => {
        if (err.errno === -4058) { // If file not exists
          objData.id = 1; // Set the id with value = 1
          resolve(write([objData]));
        } else reject(`ERROR => ${err}`);
      });
  });
}

const update = (task, status) => {
  return new Promise((resolve, reject) => {
    read(filePath)
      .then(data => {
        tasks = JSON.parse(data);
        const findedTask = tasks.find(dt => dt.info === task);
        if (!findedTask) reject(`ERROR => Task ${task} not exists!`);
        else {
          findedTask.status = status === 'false' ? Boolean(false) : Boolean(true);
          resolve(write(tasks));
        }
      }).catch(err => reject(err));
  });
}

const remove = task => {
  return new Promise((resolve, reject) => {
    read()
      .then(tasks => {
        const tasksArr = JSON.parse(tasks);
        const taskDeleted = tasksArr.find((tsk, index) => {
          if (tsk.info === task) {
            tasksArr.splice(index, 1)
            resolve(write(tasksArr));
            return;
          }
        });
        if (!taskDeleted) reject(`Task ${task} not found!`);
      }).catch(err => reject(err));
  });
}

const read = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => err ? reject(err) : resolve(data));
  });
}

const write = (objData) => {
  console.log('asdf', objData);
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(objData), 'utf8', (err) => {
      if (err) reject(err);
      else resolve(`Task Saved!`);
    });
  });
}

module.exports = {
  save,
  update,
  read,
  remove
}
