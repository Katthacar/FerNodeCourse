const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limit: {
    default: 10,
    alias: 'l'
  },
  start: {
    default: 1,
    alias: 's'
  }
};

const argv = require('yargs')
  .command('create', 'Crea en archivo tabla de multiplicar', opts)
  .command('list', 'Lista tabla de multiplicar', opts)
  .help()
  .argv;

module.exports = {
  argv
};
