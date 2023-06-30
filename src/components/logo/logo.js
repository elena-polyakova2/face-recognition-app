import React from 'react';
import Tilt from 'react-parallax-tilt';
import bot from './icons8-bot-96.png';
import './logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
    <Tilt className='tilt br-2 shadow-2'  options={{ max : 55 }} style={{ height: 150, width: 150 }}>
    <div className="pa3">
      <img style={{paddingTop: '9px'}} src={bot} alt='logo' />
      {/*{<a target="_blank" href="https://icons8.com/icon/xaquNfre75yC/bot">Bot</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>*/}

    </div>
  </Tilt>
    </div>
  );
}

export default Logo;