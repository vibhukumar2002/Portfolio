import React from 'react'
import './Poastsheader.css'

const Postsheader = () => {
  return (
    <div id='poastheadercontainer'>

        <div className="poasttype">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="a" className="poasttypesymbol" />
            <p className='postname'>POASTS</p>
        </div>

        <div className="poasttype">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="a" className="poasttypesymbol" />
            <p className='postname'>REELS</p>
        </div>

        <div className="poasttype">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="a" className="poasttypesymbol" />
            <p className='postname'>TAGGED</p>
        </div>
       

    </div>
  )
}

export default Postsheader