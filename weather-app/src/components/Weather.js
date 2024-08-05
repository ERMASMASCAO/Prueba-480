import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../LanguageContext';

function Weather({ city }) {
  const { language } = useLanguage();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=${language}`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [city, language]);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Min Temperature: {weatherData.main.temp_min}°C</p>
      <p>Max Temperature: {weatherData.main.temp_max}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
    </div>
  );
}

export default Weather;
