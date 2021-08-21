import { auth, provideAuthGoogle } from "../firebase";

export const signOut = () => {
  return auth.signOut();
};

export const authWithGoogle = () => {
  return auth.signInWithPopup(provideAuthGoogle);
};

export const userIsLogged = (callback) => {
  return auth.onAuthStateChanged((user) => {
    if (user) return callback(user);
    else callback(null);
  });
};

export const registerUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const loginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
