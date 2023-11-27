import React from 'react'
import './Header.css'
import Headerbuttons from './Headerbuttons'

const Header = () => {

  return (
    <div id='headercontainer'>
        <h3  id='appname'>instagram</h3>
        <input type="text"  id='searchbar' name='searchbar' placeholder='Search Instagram'/>
        <Headerbuttons/>
        
    </div>
  )
}

export default Header