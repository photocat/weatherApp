import axios from 'axios';

const apiKey = '27d06aa5eff183b72311364c782c5b15';
const units = 'metric';

export const GetWeather = (city) => {
  const promise = axios.get(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=' +
      apiKey +
      '&units=' +
      units,
  );

  const dataPromise = promise.then((response) => response.data);

  return dataPromise;
};
