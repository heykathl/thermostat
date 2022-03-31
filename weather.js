import got from 'got';
const apiKey = 'a7592093965b1f52f4674333ed8499a5';
let weatherData = null;

export default class WeatherApi {

  fetchWeatherData(city, callback) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    got(apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      callback(weatherData);
    });
  };
};





