import React, { Component } from "react"
import './Styles/FilterControls.css'
import { NavLink } from 'react-router-dom'


class FilterControls extends Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div>
        <h1 className='header'>Adam Niedzwiecki</h1>
        <div className='links'>
          <NavLink to='/about' className='nav'>About</NavLink>
          <NavLink to='/work' className='nav'>Work</NavLink>
          <NavLink to='/contact' className='nav'>Contact</NavLink>
        </div>
      </div>
    )
  }
}

export default FilterControls;