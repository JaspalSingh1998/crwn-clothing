import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyA_MfKfHx8uVO_be4JdcXk9NdA1NraVQ64",
  authDomain: "crwn-clothing-d6af5.firebaseapp.com",
  projectId: "crwn-clothing-d6af5",
  storageBucket: "crwn-clothing-d6af5.appspot.com",
  messagingSenderId: "130825139135",
  appId: "1:130825139135:web:2bdcf632272a2adbc1670a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
