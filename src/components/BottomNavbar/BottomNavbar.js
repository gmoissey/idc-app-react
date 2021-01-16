import React from 'react';
import './BottomNavbar.scss';

import { IoListCircleOutline, IoBookOutline, IoPersonCircleOutline } from "react-icons/io5";

const BottomNavbar = () => (
  <div className="BottomNavbar" data-testid="BottomNavbar"> 
    <a href="#" className="navLink navLink_Active">
    <div>
      <IoListCircleOutline className="navIcon"/><br/>
      <span className="navLinkText">Урок</span>
    </div>
    </a>
    
    <a href="#" className="navLink">
      <div>
        <IoBookOutline className="navIcon"/><br/>
        <span className="navLinkText">План</span>
      </div>
    </a>
    
    <a href="#" className="navLink">
      <div>
        <IoPersonCircleOutline className="navIcon"/><br/>
        <span className="navLinkText">План</span>
      </div>
    </a>
  </div>
);

BottomNavbar.propTypes = {};

BottomNavbar.defaultProps = {};

export default BottomNavbar;
