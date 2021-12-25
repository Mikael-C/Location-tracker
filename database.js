import firebase from 'firebase/app'

// Optionally import the services that you want to use
//import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAndRi5a3IBx1H26ZhLimpXTgWGFJC5ghs",
  authDomain: "userlocation-310fc.firebaseapp.com",
  projectId: "userlocation-310fc",
  storageBucket: "userlocation-310fc.appspot.com",
  messagingSenderId: "414893666555",
  appId: "1:414893666555:web:2b0fbc5944ff4c7876805e"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
 

firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    console.log('We are authenticated now!');
  }

  // Do other things
});

async function loginWithFacebook() {
  await Facebook.initializeAsync('<FACEBOOK_APP_ID>');

  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ['public_profile'],
  });

  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    firebase
      .auth()
      .signInWithCredential(credential)
      .catch(error => {
        // Handle Errors here.
      });
  }
}

function storeUserLocation(user, location) {
  if (user != null) {
    firebase
      .database()
      .ref('users/' + user.uid)
      .set({
        userlocation: location,
      });
  }
}



// function StoreUserLocation(userId, location) {
//     firebase
//       .database()
//       .ref('users/' + userId)
//       .set({
//         userlocation: location,
//       });

// }

const databaseRef = firebase.database().ref()
export const locationRef = databaseRef.child("location")
export default firebase