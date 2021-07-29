import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAc6o2Ei9CdIFbmY3bOZnwxpFUFVin4U9M",
  authDomain: "project-toon-f3d02.firebaseapp.com",
  projectId: "project-toon-f3d02",
  storageBucket: "project-toon-f3d02.appspot.com",
  messagingSenderId: "325828453645",
  appId: "1:325828453645:web:7f8d4ae3c997610f7d3c44",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
