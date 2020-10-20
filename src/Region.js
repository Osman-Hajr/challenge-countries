import React, {useState} from 'react';
const Region = ({country, handleRegionSelect}) => {
  const [inputCountry, setInputCountry] = useState("")
  const regionHandler = (event) =>{
    setInputCountry()
    handleRegionSelect(event.target.value.toLowerCase())
  }
  return(
    <div>
      <input
            className='input-element'
            value={inputCountry}
            onChange={regionHandler}
            type="text"
            placeholder="SEARCH FOR REGIONS"
     />
    </div>
  )
}
export default Region;
