import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../Styles/Splash.css'


 const Splash = () => {
  return (
    <div className='splash'>
      <h1 className='splash-header'>Adam Niedzwiecki</h1>
      <h5 className='splash-desc'>Developer, Musician, Producer</h5>
      <div className='btn-container'>
        <Link to='/home'>
          <button className='enter-btn'>ENTER...</button>
        </Link>
      </div>
    </div>
  )
}

export default Splash;