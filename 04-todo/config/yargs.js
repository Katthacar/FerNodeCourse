// node app create -d "Pasear al perro": Persist task
// node app list: Listing all of the task
// node app update -d "Pasear al perro" -c: Update task

const description = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea'
}

const status = {
  alias: 's',
  default: false,
  desc: 'Estado de la tarea true = terminada, false = no terminada'
}

const persistOptions = {
  description,
  status
}

const argv = require('yargs')
  .command('create', 'Create task', persistOptions)
  .command('update', 'Update task', persistOptions)
  .command('list', 'Listing tasks')
  .command('remove', 'Delete a task', { description })
  // .command('remove', 'Listing tasks', function (yargs) {
  //   return yargs.option('description', 
  //   { alias: 'd', demand: true, desc: 'Elimina tarea' })
  // })
  .help()
  .argv;

module.exports = {
  argv
}
