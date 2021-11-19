import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJrGwrzYLknqHNpMpnxcagf2lGlDi6S2M",
  authDomain: "react-hooks-update-a3d8d.firebaseapp.com",
  databaseURL:
    "https://react-hooks-update-a3d8d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-hooks-update-a3d8d",
  storageBucket: "react-hooks-update-a3d8d.appspot.com",
  messagingSenderId: "346153917290",
  appId: "1:346153917290:web:3c2a619534759c1068e313",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
  }).catch((error) => console.log(error))
};
