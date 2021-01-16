import React from 'react';
import './TopSideMenu.scss';
import Swipe from 'react-easy-swipe';
//import ReactDOM from 'react-dom';

import MenuLinks from './MenuLinks/MenuLinks'

import { IoMenu } from "react-icons/io5";

class TopSideMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {menuActive: props.menuActive};

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const currentState = this.state.menuActive;
    this.setState({ menuActive: !currentState });
  };

  render(){
    return (
      <div>
        <header className="TopSideMenu" data-testid="TopSideMenu">
          <button className="button" itemID="navButton" type="button" onClick={this.toggleMenu}>
            <IoMenu />
          </button>
        </header>
        <MenuLinks menuActive={this.state.menuActive} auth={this.props.auth} toggleFunc={this.toggleMenu}/>
      </div>
    )
  }
}

TopSideMenu.propTypes = {};

TopSideMenu.defaultProps = {};

export default TopSideMenu;
