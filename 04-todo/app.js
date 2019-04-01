const argv = require('./config/yargs').argv;
const controller = require('./controller');
const colors = require('colors');

console.log(argv);

const command = argv._[0];

console.log('command:', command);

switch (command) {
  case 'create': // persist task on JSON file
    controller.save(argv.description)
      .then(res => console.log(`Created => ${res}`.green))
      .catch(err => console.log(err.red));
    break;
  case 'update': // Update task on JSON file
    controller.update(argv.description, argv.status)
      .then(res => console.log(`Updated => ${res}`.green))
      .catch(err => console.log(err.red));
    break;
  case 'list': // Listing task from JSON file
    controller.read()
      .then(data => {
        const dataArr = JSON.parse(data);
        console.log('++++++'.green);
        console.log('TAREAS'.green);
        console.log('++++++'.green);
        dataArr.forEach(task => {
          console.log(`${task.info} => ${task.status}`.green);
        });
      })
      .catch(err => console.log(err.red));
    break;
  case 'remove':
    controller.remove(argv.description)
      .then(res => console.log(`Success => ${argv.description} has deleted!`.green))
      .catch(err => console.log(err.red))
    break;

  default:
    console.log('Command not found!!!');
    break;
}

