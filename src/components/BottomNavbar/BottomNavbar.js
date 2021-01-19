import React from 'react';
import './BottomNavbar.scss';
import { Link, useLocation } from "react-router-dom";
import { IoListCircleOutline, IoBookOutline, IoPersonCircleOutline } from "react-icons/io5";

function BottomNavbar (props) {
  const location = useLocation();

  const getCurrentWeek = () => {
    if(location.pathname.substring(1, 5) === 'week'){
      return location.pathname;
    }else if(location.pathname.substring(1, 5) === 'plan' || location.pathname.substring(1, 8) === 'profile'){
      let tmp = location.pathname;
      return tmp.substr(tmp.length - 7);
    }

    return "/404";
  }

  const activeNavLink = (name) => {
    if(location.pathname.substring(1, 5) === 'week' && name === 'week'){
      return "navLink_Active";
    }else if(location.pathname.substring(1, 5) === 'plan' && name === 'plan'){
      return "navLink_Active";
    }else if(location.pathname.substring(1, 8) === 'profile' && name === 'profile'){
      return "navLink_Active";
    }

    return "";
  }

  return (
    <div className="BottomNavbar" data-testid="BottomNavbar"> 
      <Link to={getCurrentWeek()} className={"navLink " + activeNavLink('week')}>
      <div>
        <IoListCircleOutline className="navIcon"/><br/>
        <span className="navLinkText">Урок</span>
      </div>
      </Link>
      
      <Link to={'/plan' + getCurrentWeek()} className={"navLink " + activeNavLink('plan')}> 
        <div> 
          <IoBookOutline className="navIcon"/><br/>
          <span className="navLinkText">План</span>
        </div>
      </Link>
      
      <Link to={'/profile' + getCurrentWeek()} className={"navLink " + activeNavLink('profile')}>
        <div>
          <IoPersonCircleOutline className="navIcon"/><br/>
          <span className="navLinkText">Профиль</span>
        </div>
      </Link>
    </div>
  );
  }

BottomNavbar.propTypes = {};

BottomNavbar.defaultProps = {};

export default BottomNavbar;
