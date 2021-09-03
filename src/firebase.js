import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwnHuJ-24qp9TUG1T6fsQy5zV2KdnQ-dE",
  authDomain: "ecommerce-guantes.firebaseapp.com",
  projectId: "ecommerce-guantes",
  storageBucket: "ecommerce-guantes.appspot.com",
  messagingSenderId: "539701802922",
  appId: "1:539701802922:web:40fc9ecac4ede88b9e5dd3",
  measurementId: "G-GJVYESLBCM",
};

firebase.apps.length < 1 && firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provideAuthGoogle = new firebase.auth.GoogleAuthProvider();
