import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyChTv2Ncw4CxC2yhvMqGrc-iBQVN1YyJY0",
  authDomain: "vue-omsu-6aa01.firebaseapp.com",
  databaseURL: "https://vue-omsu-6aa01.firebaseio.com",
  projectId: "vue-omsu-6aa01",
  storageBucket: "vue-omsu-6aa01.appspot.com",
  messagingSenderId: "953452980835"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
