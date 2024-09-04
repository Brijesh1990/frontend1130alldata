// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7FrDP90Ro8qZeViGgGEeKiAjMW0xr2ug",
  authDomain: "login-register-logout-ap-b29a7.firebaseapp.com",
  projectId: "login-register-logout-ap-b29a7",
  storageBucket: "login-register-logout-ap-b29a7.appspot.com",
  messagingSenderId: "811840603412",
  appId: "1:811840603412:web:9787971282caceb3596e01",
  measurementId: "G-9NHNRFTRWK"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;