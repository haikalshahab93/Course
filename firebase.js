import * as firebase from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {initializeFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaNx7v5-WfVD5fhEcHt__DgfjiczOuV5I",
  authDomain: "netlix-haikal.firebaseapp.com",
  projectId: "netlix-haikal",
  storageBucket: "netlix-haikal.appspot.com",
  messagingSenderId: "37091359152",
  appId: "1:37091359152:web:7ba7b38c04a01275163e75"
};

// Initialize Firebase
  let app ;
  app = firebase.initializeApp(firebaseConfig)
  const db = initializeFirestore(app, {
      experimentalForceLongPolling: true,
    });
  const auth = getAuth(app);


export {db,auth};