import React from 'react'
import './Headerbuttons.css'

const Headerbuttons = () => {
  return (
    <div id='headerbuttoncontainers'>
        <button id='login' className='hbtn'>Log In</button>
        <button id='signup' className='hbtn'> Sign up</button>
    </div>
  )
}

export default Headerbuttons