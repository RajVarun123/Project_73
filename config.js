import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCI5zEwDreTTzom1ivZWSJtQ2vwwFsUOgQ",
    authDomain: "project-71-c47ce.firebaseapp.com",
    projectId: "project-71-c47ce",
    storageBucket: "project-71-c47ce.appspot.com",
    messagingSenderId: "479494029461",
    appId: "1:479494029461:web:b4ba355868c267c13d5b9c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();