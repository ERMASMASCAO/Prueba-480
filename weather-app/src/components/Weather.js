import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../LanguageContext';
import './Weather.css'; 

/**
 * Weather Component
 * 
 * This component fetches and displays weather information for a specified city.
 * It uses the OpenWeatherMap API to retrieve weather data and displays the current temperature,
 * minimum and maximum temperatures, and weather description along with an icon representing the weather condition.
 * 
 * @param {string} city - The name of the city for which to fetch the weather data.
 * 
 * @returns {JSX.Element} - A component that displays the weather information for the specified city.
 */
function Weather({ city }) {
  // Destructure the current language from the language context
  const { language } = useLanguage();
  
  // State to store weather data
  const [weatherData, setWeatherData] = useState(null);

  /**
   * useEffect Hook - Fetch weather data when the city or language changes.
   * 
   * Sends a request to the OpenWeatherMap API to get weather data for the specified city.
   * Updates the state with the fetched data or logs an error if the request fails.
   */
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

  // Show a loading message while weather data is being fetched
  if (!weatherData) return <div>Loading...</div>;

  // Extract and format temperature values
  const temp = Math.floor(weatherData.main.temp);
  const tempMin = Math.floor(weatherData.main.temp_min);
  const tempMax = Math.floor(weatherData.main.temp_max);

  return (
    <div className="weather-container">
      <h2>Weather in {weatherData.name}</h2>
      <p className="temperature">Temperature: {temp}°C</p>
      <p>Min Temperature: {tempMin}°C</p>
      <p>Max Temperature: {tempMax}°C</p>
      <p className="description">Description: {weatherData.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
    </div>
  );
}

export default Weather;
