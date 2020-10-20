import React, { useState } from "react"

const Search = ({handleCountrySearch}) => {
  const [input, setInput] = useState("")
  function searchHandler(event){
    setInput();
    handleCountrySearch(event.target.value.toLowerCase())
  }
  return(
    <div className="search-bar">
      <input 
        type="text"
        className='input-element'
        value={input}
        onChange={searchHandler}
        placeholder="Search..." />
    </div>
  )
}
export default Search