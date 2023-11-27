import React from 'react'
import './Infoheader.css'

const Infoheader = () => {
  return (
    <div infoheadercontainer>

       <div id='profilename'>
       <h2>Virat Kohli</h2>
       <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="logo" id='verifiedimg'/>
       <div id='profileheaderbuttonscontainer'>
       
       <button className="profilebutton" id="follow">Follow</button>
             <button id="message" className="profilebutton">Message</button>
       </div>

       </div>

     

    </div>
  )
}

export default Infoheader