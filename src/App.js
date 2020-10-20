import React, {useState} from 'react';
import SingleCountry from './SingleCountry';
import HeadingElement from './Header';
import countriesAll from './countriesAll.json'
import Search from './Search'
import Region from './Region';
import './App.css';

function App() {
  const [countryInfo, setCountryInfo] = useState(countriesAll)
  const  handleCountrySearch = (input) => {
    setCountryInfo(
      countriesAll.filter((country) =>
        country.name.toLowerCase().includes(input) || country.capital.toLowerCase().includes(input)
      )
    );
  }
  const handleRegionSelect = (input) => {
    setCountryInfo(countryInfo.filter(country =>(country.region.toLocaleLowerCase().includes(input))))
  } 
  return(
    <div className="app-div">
      <HeadingElement />
      <div className="searchElem">
        <div className="searchCountry">

        <Search handleCountrySearch={handleCountrySearch} />
        </div>
        <div className="searchRegion">

        <Region country={countryInfo} handleRegionSelect={handleRegionSelect} />
        </div>
      </div>
      <div className="container">
        {countryInfo.map(country=>(
          <SingleCountry country={country} />
        ))}
      </div>
    </div>
  )
}

export default App;
