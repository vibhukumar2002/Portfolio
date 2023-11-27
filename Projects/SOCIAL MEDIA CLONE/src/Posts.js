import React from 'react'
import Postsheader from './Postsheader'
import Postscontent from './Postscontent'
import './Posts.css'
import Poastsfooter from './Poastsfooter'

const Posts = () => {
  return (
    <div id='postscontainer'>
        <Postsheader/>
        <Postscontent/>
        <Poastsfooter/>
        
    </div>
  )
}

export default Posts