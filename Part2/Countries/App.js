import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { nanoid } from "nanoid";

const App = () => {
  const [query, setQuery] = useState([]);
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState([]);

  const countryHook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };

  const getfilteredCountries = (query, countries) =>
    query.length < 0
      ? setQuery([])
      : countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(query.toString().toLowerCase())
        );
  const filteredCountries = getfilteredCountries(query, countries);

  useEffect(countryHook, []);

  const weatherHook = () => {
    const api_key = process.env.REACT_APP_API_KEY;
    if (filteredCountries.length === 1) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${filteredCountries.map(
            (city) => city.capital
          )}&appid=${api_key}`
        )
        .then((response) => {
          setWeather(response.data);
        });
    }
  };
  useEffect(weatherHook, []);

  console.log(weather);

  const showClickedCountry = (e) => {
    setQuery(e.target.value);
  };

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  const fourOrLess = () => {
    if (filteredCountries.length === 1) {
      return filteredCountries.map((country) => (
        <div key={nanoid()}>
          <h2>{country.name.common}</h2>
          <ul>
            {" "}
            <h3>Capital City</h3>
            {country.capital.map((x) => (
              <li key={nanoid()}>{x}</li>
            ))}
          </ul>
          <h3>Area : {country.area}</h3>
          <ul>
            {" "}
            <h3>Languages</h3>
            {Object.values(country.languages).map((x) => (
              <li key={nanoid()}>{x}</li>
            ))}
          </ul>
          <br></br>
          <img
            src={country.flags.png}
            alt={`national flag of ${country.name.common}`}
          ></img>
          <h2>Weather in</h2>
          {country.capital.map((city) => (
            <div key={nanoid()}>
              <b>{city}</b>
              <p>Temperature is : </p>
            </div>
          ))}
        </div>
      ));
    }
    if (filteredCountries.length >= 10) {
      return <li key={nanoid()}>Too many matches, please specify a country</li>;
    }
    if (filteredCountries.length <= 10 || filteredCountries.length > 1) {
      return filteredCountries.map((country) => (
        <div key={nanoid()}>
          <li key={country.name.common}>
            {country.name.common}
            <br></br>
            <button
              value={country.name.common}
              type="submit"
              onClick={showClickedCountry}
            >
              Show Country
            </button>
          </li>
        </div>
      ));
    }
  };

  return (
    <div>
      <label htmlFor="search">Search Country</label>
      <input id="search" type="text" onChange={searchHandler}></input>
      <div>
        <ul>{fourOrLess()}</ul>
      </div>
    </div>
  );
};

export default App;
