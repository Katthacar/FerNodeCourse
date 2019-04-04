const axios = require('axios');

const getWeather = async (lat, long) => {
  const KEY = 'd2116122a787966672c7d1fb58dd59f4';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${KEY}&units=metric`
  const res = await axios.get(URL);
  return res.data.main.temp;
}

module.exports = {
  getWeather
}
