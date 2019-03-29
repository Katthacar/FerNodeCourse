// Requires
const argv = require('./config/yargs').argv;
var colors = require('colors');

console.log('yarg argv:', argv);

const { createMult, showMult } = require('./controller/controller');

const path = 'tables'

let command = argv._[0];
switch (command) {
  case 'list':
    showMult(argv.base, argv.start, argv.limit, path)
      .then(res => {
        console.log('==============================='.green);
        console.log(`========= Tabla del ${argv.base} =========`.cyan);
        console.log('==============================='.green);
        console.log(res)
      })
      .catch(e => console.log('Error => ', e));
    break;
  case 'create':
    console.log('Creating...');
    createMult(argv.base, argv.start, argv.limit, path)
      .then(res => console.log(res))
      .catch(e => console.log('Error => ', e));
    break;
  default:
    console.log('Command not defined');
    break;
}
