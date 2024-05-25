// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8V9EPAzrCiUiip_Pq4PDIEKoQOMdnu8w",
  authDomain: "netflix-app-b57a7.firebaseapp.com",
  projectId: "netflix-app-b57a7",
  storageBucket: "netflix-app-b57a7.appspot.com",
  messagingSenderId: "174808973675",
  appId: "1:174808973675:web:770419486b37a5574a0c2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Since getAuth() needs to be called for every API, we're doing it once over here
export const auth = getAuth();
