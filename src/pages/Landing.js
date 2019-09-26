import React, { Component } from 'react';
import '../style/Landing.scss'

class Landing extends Component {

  render() {
    return (
      <div className='landing'>
      <h1 className='landing__title'><span className='landing__name'>Tess NEAU</span></h1>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    );
  }

}

export default Landing;
