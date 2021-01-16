import React from 'react';
import './MenuLinks.scss';
//import ReactDOM from 'react-dom';

import { IoListOutline} from "react-icons/io5";

class MenuLinks extends React.Component {
  constructor(props){
    super(props);

    this.state = { weeks : ["active", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive"],
                    menuOpen: false};
  }

  render(){
      return (
        <nav className={"nav " + (this.props.menuActive ? "navOpen" : "navClose")}>
          <div className="navLinks">
            <h2>Недели</h2>
            {this.state.weeks.map((status, index) => (
              <a href="#" className={"weekLink " + status}>
                <IoListOutline className="navIcon"/>
                Неделя {index + 1}
              </a>
            ))}
            <div className="button_cont" onClick={() => this.props.auth.signOut()}>
              <a className="logOutBtn" href="#">Logout</a>
            </div>
          </div>

          <div className="navOverlay" onClick={this.props.toggleFunc}>
          </div>
        </nav>
      )
  }
}


MenuLinks.propTypes = {};

MenuLinks.defaultProps = {};

export default MenuLinks;
