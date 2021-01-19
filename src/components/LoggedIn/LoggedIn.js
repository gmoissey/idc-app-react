import React from 'react';
import './LoggedIn.scss';

import Swipe from 'react-easy-swipe';
import BottomNavbar from './../BottomNavbar/BottomNavbar';
import TopSideMenu from './../TopSideMenu/TopSideMenu';
import WeekLesson from './../WeekLesson/WeekLesson';
import { BrowserRouter as Router} from "react-router-dom";

let menuStatus = false;

const LoggedIn = (props) => (

  <div className="LoggedIn" data-testid="LoggedIn">
    <Swipe onSwipeRight={openMenu} onSwipeLeft={closeMenu}>
      <Router>
      <TopSideMenu auth={props.auth} menuActive={menuStatus}/>

        <WeekLesson auth={props.auth}/>

      <BottomNavbar auth={props.auth}/>
      </Router>
    </Swipe>
  </div>
);

const closeMenu = () => {
  console.log("menuClose");
  menuStatus = false;
}

const openMenu = () => {
  console.log("menuOpen");
  menuStatus = true;
}

LoggedIn.propTypes = {};

LoggedIn.defaultProps = {};

export default LoggedIn;
