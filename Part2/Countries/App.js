import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Countries from "./Components/Countries";

const App = () => {
  console.log("Component Render");
  const [query, setQuery] = useState([]); // manages state for the search box
  const [countries, setCountries] = useState([]); // manages state for countries data recieved from external API
  const [weather, setWeather] = useState([]); // manages state for weather data recieved from external API
  const [capitalCity, setCapitalCity] = useState("Pretoria"); // manages state for setting the capital city of a country. This is needed in order to obtain weather data from weather API. Have to set a default capital that will be changed.

  // This is how we obtain data from the external API for countries list.
  const countryHook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(countryHook, []);

  // This is how to we obtain data from weather API
  const weatherHook = () => {
    const api_key = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&units=metric&appid=${api_key}` // weather api key must be declared in node before every npm start
      )
      .then((response) => {
        setWeather(response.data);
      });
  };
  useEffect(weatherHook, [capitalCity]);

  const showClickedCountry = (e) => {
    setQuery(e.target.value);
  };

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  const handleCapitalChange = (capital) => setCapitalCity(capital);

  return (
    <div>
      <label htmlFor="search">Search Country</label>
      <input id="search" type="text" onChange={searchHandler}></input>
      <Countries
        countries={countries}
        weather={weather}
        query={query}
        clickedCountry={showClickedCountry}
        handleCapitalChange={handleCapitalChange}
      ></Countries>
    </div>
  );
};
export default App;
