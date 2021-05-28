import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVdCDCIlGLM0iV6XJk8u6Zwsf48KKenL0",
    authDomain: "family-organizer-db.firebaseapp.com",
    projectId: "family-organizer-db",
    storageBucket: "family-organizer-db.appspot.com",
    messagingSenderId: "1009536097256",
    appId: "1:1009536097256:web:548908535ecc6cff0f625d",
    measurementId: "G-P57H3LJE8L"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;  