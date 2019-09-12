import firebase from "firebase/app";
import firestore from "firebase/firestore";

// Initialize Firebase
// Values for author's database removed due to security reasons.
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
