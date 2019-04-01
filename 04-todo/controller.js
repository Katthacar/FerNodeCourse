const { save: wCreateFile, read: wReadFile, update: wUpdateFile, remove: wRemoveTask } = require('./writter');

const read = () => {
  return wReadFile();
}

const save = (data) => {
  return wCreateFile(data);
}

const update = (data, status) => {
  return wUpdateFile(data, status);
}

const remove = (task) => {
  return wRemoveTask(task);
}

module.exports = {
  save,
  update,
  read,
  remove
}
