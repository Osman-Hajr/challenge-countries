import React from 'react'
const CountryDetails = ({country})=> {
  return(
    <div>
      <ul className="ul-elem">
        <li className="li-elem">
          <h3>{country.name}</h3>
        </li>
        <li className="li-elem">
          <h5>Native Name: <span>{country.nativeName}</span> </h5>
        </li>
        <li className="li-elem">
          <h5>Population: <span>{country.population}</span> </h5> 
        </li>
        <li className="li-elem">
          <h5>Region: <span>{country.region}</span> </h5> 
        </li>
        <li className="li-elem">
          <h5>Capital: <span>{country.capital}</span></h5>
        </li>
      </ul>
    </div>
  )
}
export default CountryDetails