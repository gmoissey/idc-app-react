import React from 'react';
import './App.css';
import LoggedIn from './components/LoggedIn/LoggedIn';
import LoggedOut from './components/LoggedOut/LoggedOut';

import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, googleAuthProvider } from './firebase/firebaseConfig';
//import { useCollectionData } from 'react-firebase-hooks/firestore';

function App() {
  const [user] = useAuthState(auth);
 
  return ( 
    <div className="App">
      {user ? <LoggedIn auth={auth}/> : <LoggedOut auth={auth}/>} 
    </div>
  );
}

export default App;
