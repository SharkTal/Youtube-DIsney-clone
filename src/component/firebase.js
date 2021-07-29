// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDzMpgANRqeYGoNiVJ2adLuJAxCCnIsLEQ",
    authDomain: "disneyplus-clone-4d89b.firebaseapp.com",
    projectId: "disneyplus-clone-4d89b",
    storageBucket: "disneyplus-clone-4d89b.appspot.com",
    messagingSenderId: "374405909006",
    appId: "1:374405909006:web:9ea4cca5cafd13c26bca5f",
    measurementId: "G-QRHPSG8TR6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =  new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;