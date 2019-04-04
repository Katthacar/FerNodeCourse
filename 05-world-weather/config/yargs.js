const direction = {
  demand: 'true',
  alias: 'd',
  desc: 'Dirección de la ciudad para obtener el clima'
}

const argv = require('yargs').options({
  direction
}).argv;

module.exports = {
  argv
}
