import React from 'react'
const CountryFlag =({country}) => {
  return(
    <div>
      <img className="img-elem" src={country.flag} alt="country flag" />
    </div>
  )
}
export default CountryFlag