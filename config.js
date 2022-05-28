import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBzw01jgg09oauWESUWDzKfOVxUSIKHGGU",
    authDomain: "eride-3aa1e.firebaseapp.com",
    projectId: "eride-3aa1e",
    storageBucket: "eride-3aa1e.appspot.com",
    messagingSenderId: "711696996688",
    appId: "1:711696996688:web:5ea5decbf07c4f93b5f455"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
