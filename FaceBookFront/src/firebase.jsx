import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBzyqSz6anlaDutz9r8wYYNVXfFKiSKIyc",
    authDomain: "fbproject-fcda1.firebaseapp.com",
    projectId: "fbproject-fcda1",
    storageBucket: "fbproject-fcda1.appspot.com",
    messagingSenderId: "296788418112",
    appId: "1:296788418112:web:0a08eababff1ee554389a5"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {
    auth,provider
  };
  export default db;