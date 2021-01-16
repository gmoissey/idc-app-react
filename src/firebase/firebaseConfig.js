import firebase from 'firebase/app'; // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice. 
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyD7GOBN_1WsqYxOlxLPHb-tuEnV2Qou8GI",
    authDomain: "idc-app-94d60.firebaseapp.com",
    projectId: "idc-app-94d60",
    storageBucket: "idc-app-94d60.appspot.com",
    messagingSenderId: "946976332869",
    appId: "1:946976332869:web:f8fa50ff67addd10f3572c",
    measurementId: "G-3M6LZEXF34"
};
firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, firestore, googleAuthProvider };