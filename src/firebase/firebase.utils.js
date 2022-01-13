// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCr5ACzxWnOB6addSmZKoCl2-Z3qVUFyR0",
    authDomain: "crwn-clothing-db-9bddd.firebaseapp.com",
    projectId: "crwn-clothing-db-9bddd",
    storageBucket: "crwn-clothing-db-9bddd.appspot.com",
    messagingSenderId: "293173740499",
    appId: "1:293173740499:web:f7916de0a095a1ec292526",
    measurementId: "G-BGJLETZSJK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebaseConfig;