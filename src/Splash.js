import React from 'react';
import { Link } from 'react-router-dom'
import './Styles/Splash.css'


 const Splash = () => {
  return (
    <div className='splash'>
      <h1 className='splash-header'>Adam Niedzwiecki</h1>
      <Link to='/home'>
        <button>ENTER</button>
      </Link>
    </div>
  )
}

export default Splash;