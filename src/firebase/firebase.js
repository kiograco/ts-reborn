import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyCt1QbOLgnh_JF6vpfX1is6uOnMbrGq2iw",
  
    authDomain: "ts-reborn.firebaseapp.com",
  
    projectId: "ts-reborn",
  
    storageBucket: "ts-reborn.appspot.com",
  
    messagingSenderId: "1008197720475",
  
    appId: "1:1008197720475:web:91b570f239d4110100e93e",
  
    measurementId: "G-QKQ9VX839W"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
