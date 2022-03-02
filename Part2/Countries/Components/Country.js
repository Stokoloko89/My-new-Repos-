import { nanoid } from "nanoid";

function Country({ country, weather }) {
  console.log(weather.main.temp);
  return (
    <div key={nanoid()}>
      <h2>{country[0].name.common}</h2>
      <h3>Capital city : {country[0].capital}</h3>
      <p>Area in KM's {country[0].area}</p>
      <p>Languages</p>
      <ul>
        {Object.values(country[0].languages).map((language) => (
          <li key={nanoid()}>{language}</li>
        ))}
      </ul>
      <h4>National Flag :</h4>
      <img
        src={country[0].flags.png}
        alt={`national flag of ${country.name}`}
      ></img>
      <h4>Weather in {country[0].capital}</h4>
      <p>
        temperature is currently {weather.main.temp} degrees Celsius. Winds
        speed at {weather.wind.speed} m/s.
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={`weather is ${weather.weather[0].description}`}
      ></img>
    </div>
  );
}

export default Country;
