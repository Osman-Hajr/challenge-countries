import React from 'react'
//import countriesAll from './countriesAll.json'
import CountryDetails from './CountryDetails';
import CountryFlag from './CountryFlag';
const SingleCountry = ({country}) => {
  return(
    <div className="card">
      <CountryFlag country={country} />  
      <CountryDetails country={country}/>  
    </div>
  ) 
}
export default SingleCountry