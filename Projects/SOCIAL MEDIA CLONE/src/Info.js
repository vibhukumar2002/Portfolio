import React from 'react'
import Infoheader from './Infoheader'
import Infocontent from './Infocontent'
import Infofooter from './Infofooter'
import './Info.css'

const Info = () => {
  return (
    <div id='infocontainer'>
        <Infoheader/>
        <Infocontent/>
        <Infofooter/>
    </div>
  )
}

export default Info