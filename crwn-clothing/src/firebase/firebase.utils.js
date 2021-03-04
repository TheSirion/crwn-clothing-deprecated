import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDSdeVG6YxSBtLiO5GV_a8e1ztkcOfyeqY",
  authDomain: "crwn-db-380ed.firebaseapp.com",
  projectId: "crwn-db-380ed",
  storageBucket: "crwn-db-380ed.appspot.com",
  messagingSenderId: "976942581670",
  appId: "1:976942581670:web:faaff359a45860380db167",
  measurementId: "G-QH4LTHZDE6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(Provider);
