import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

  render() {
    return (
      <div className='nav-container'>
        <div className='nav-links-container'>
          <NavLink className='nav-link' activeClassName='selected' exact to='/'>Logo Here</NavLink>
          <NavLink className='nav-link' activeClassName='selected' to='/about'>About</NavLink>
          <NavLink className='nav-link' activeClassName='selected' to='/projects'>Projects</NavLink>
          <NavLink className='nav-link' activeClassName='selected' to='/contact'>Contact</NavLink>

        </div>
      </div>
    );
  }

}

export default Nav;
