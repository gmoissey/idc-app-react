import React from 'react';
import './LoggedOut.scss';

import 'firebase/auth';
import firebase from 'firebase/app';

class LoggedOut extends React.Component {;
  constructor(props){
    super(props);
    this.signInWithGoogle = this.signInWithGoogle.bind(this);
    this.state = {auth: props.auth};
  }

  signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this.props.auth.signInWithPopup(provider);
  }

  render(){
    return(
    <div className="LoggedOut" data-testid="LoggedOut">
      <div className="google-btn" onClick={this.signInWithGoogle}>
        <div className="google-icon-wrapper">
          <img className="google-icon" alt="Google Logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
        <p className="btn-text"><b>Sign in with google</b></p>
      </div>
    </div>
  )}
}

LoggedOut.propTypes = {};

LoggedOut.defaultProps = {};

export default LoggedOut;
