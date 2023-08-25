import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDXwjZtoKuhMtrdXRQZevn-PJTYDUh500",
    authDomain: "fir-c6d4c.firebaseapp.com",
    projectId: "fir-c6d4c",
    storageBucket: "fir-c6d4c.appspot.com",
    messagingSenderId: "764935746326",
    appId: "1:764935746326:web:53fd66f702a4cf3ae71637",
    measurementId: "G-TESM553RLW"
  };

 export default firebase.initializeApp(firebaseConfig)