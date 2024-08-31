import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError("City not found");
      setWeatherData(null);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Weather App</h1>
      <form onSubmit={fetchWeather} style={styles.form}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Get Weather
        </button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
      {weatherData && (
        <div style={styles.weatherInfo}>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
  weatherInfo: {
    marginTop: "20px",
  },
};

export default Weather;
