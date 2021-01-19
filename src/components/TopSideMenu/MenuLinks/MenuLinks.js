import React from 'react';
import './MenuLinks.scss';
//import ReactDOM from 'react-dom';

import { IoListOutline} from "react-icons/io5";
import { Link } from "react-router-dom";

class MenuLinks extends React.Component {
  constructor(props){
    super(props);
    this.createPath = this.createPath.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.state = { weeks : ["active", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive", "nonActive"],
                    menuOpen: false};
  }

  createPath(index){
    return '/week' + Math.floor(index/10) + '' + ((index % 10) + 1);

  };

  checkStatus(index){
    let tmp = 'week' + Math.floor(index/10) + '' + ((index % 10) + 1);
    console.log(this.props.location);
    if(this.props.location === tmp){
      return 'weekLinkactive';
    }

    return 'weekLinknonActive';
  }

  render(){
      return (
        <nav className={"nav " + (this.props.menuActive ? "navOpen" : "navClose")}>
          <div className="navLinks">

            <h2>Недели</h2>
            {this.state.weeks.map((status, index) => (
              <Link to={this.createPath(index)} className={'weekLink ' + this.checkStatus(index)}>
                <IoListOutline className="navIcon"/>
                Неделя {index + 1}
              </Link>
            ))}

         
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
