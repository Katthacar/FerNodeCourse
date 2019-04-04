const argv = require('./config/yargs').argv;
const { weatherFunc } = require('./weather');
const { getWeather } = require('./weather-maps');

const cityName = argv.d;

// weatherFunc(cityName)
//   .then(data => {
//     getWeather(data.lat, data.lng)
//       .then(console.log)
//       .catch(console.error);
//   })
//   .catch(err => err.response.data && console.log('Error => Petición no encontrada'));

const getInfo = async cityName => {
  const objRes = await weatherFunc(cityName);
  const info = await getWeather(objRes.lat, objRes.lng);
  try {
    return `The weather of ${cityName} is: ${info}`;
  } catch (err) {
    return `It was not possible to determine the climate of ${cityName}`;
  }
}

getInfo(cityName).then(console.log).catch(console.log);
