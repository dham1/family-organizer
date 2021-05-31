import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

const config = {
    apiKey: "AIzaSyBVdCDCIlGLM0iV6XJk8u6Zwsf48KKenL0",
    authDomain: "family-organizer-db.firebaseapp.com",
    projectId: "family-organizer-db",
    storageBucket: "family-organizer-db.appspot.com",
    messagingSenderId: "1009536097256",
    appId: "1:1009536097256:web:548908535ecc6cff0f625d",
    measurementId: "G-P57H3LJE8L"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {

            console.log('error creating user: ', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;