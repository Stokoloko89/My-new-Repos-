import { nanoid } from "nanoid";
import Country from "./Country";

function Countries({
  query,
  countries,
  clickedCountry,
  handleCapitalChange,
  weather,
}) {
  // filter function to narrow down countries to a specific country
  const getfilteredCountries = (query, countries) =>
    query.length < 0
      ? ""
      : countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(query.toString().toLowerCase())
        );

  const filteredCountries = getfilteredCountries(query, countries); // store filtered list to variable as cannot use function in comparison

  if (filteredCountries.length === 1) {
    handleCapitalChange(filteredCountries[0].capital);
    return <Country country={filteredCountries} weather={weather}></Country>;
  } else if (filteredCountries.length >= 10) {
    return <p key={nanoid()}>Too many matches, please specify a country</p>;
  } else if (filteredCountries.length <= 10 || filteredCountries.length > 1) {
    return filteredCountries.map((country) => (
      <div key={nanoid()}>
        <ul>
          <li key={country.name.common}>
            {country.name.common}
            <br></br>
            <button
              value={country.name.common}
              type="submit"
              onClick={clickedCountry}
            >
              Show Country
            </button>
          </li>
        </ul>
      </div>
    ));
  }
}

export default Countries;
