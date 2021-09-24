import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { firebaseConfig } from "../config";

firebase.apps.length < 1 && firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provideAuthGoogle = new firebase.auth.GoogleAuthProvider();
