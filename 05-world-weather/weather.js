const axios = require('axios');

const weatherFunc = async (termino) => {
  const encodeURL = encodeURI(termino);
  const axiosInst = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeURL}`,
    timeout: 1000,
    headers: {
      'X-RapidAPI-Key': 'aab6762a6bmshacf13ab8b1848c4p13679fjsnbb4646484bdb',
    }
  });
  const res = await axiosInst.get();

  const data = res.data;
  return {
    name: data.name,
    country: data.sys.country,
    temp: data.main.temp,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    lng: data.coord.lon,
    lat: data.coord.lat
  };

}

module.exports = {
  weatherFunc
}
