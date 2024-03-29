import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Nav.scss';

class Nav extends Component {

  state = {

  }

  render() {
    return (
      <div className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'><NavLink className='nav__link' activeClassName='selected' to='/about'>About</NavLink></li>
          <li className='nav__item'><NavLink className='nav__link' activeClassName='selected' to='/projects'>Projects</NavLink></li>
          <li className='nav__item'><NavLink className='nav__link' activeClassName='selected' to='/contact'>Contact</NavLink></li>
          <li className='nav__item'><NavLink className='nav__link' activeClassName='selected' to='/pdf'>CV</NavLink></li>
        </ul>
      </div>
    );
  }

}

export default Nav;


// <div className='nav__logo'>
// <NavLink className='nav__link' activeClassName='selected' exact to='/'>
// <img src="http://www.blackponyfarm.com/index_files/image326.jpg" alt="blackponylogo" width="100%" height="100%"></img>
// </NavLink>
// </div>
