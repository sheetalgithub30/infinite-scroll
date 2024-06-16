import React, { useContext } from 'react'

import { imageContext } from './App'

function Navbar() {

  const{handleSearch,text,setText} = useContext(imageContext);
  return (
    <div id="navbar">
      <h1>Infinite Scroll</h1>
      <div>
        <input type="text" value={text} onChange={(e)=>setText(e.currentTarget.value)}></input>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default Navbar