// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsRSoy67YvcsSmrtWlO64BaBLtAhD5l3g",
  authDomain: "chatapk-47e59.firebaseapp.com",
  projectId: "chatapk-47e59",
  storageBucket: "chatapk-47e59.appspot.com",
  messagingSenderId: "915981384847",
  appId: "1:915981384847:web:f7097c70cc12972aa684fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new FacebookAuthProvider();
export { auth, provider, app }