// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvccOu5MCbvTqvxn9GtO9JZnuL6UFZ548",
  authDomain: "genius-car-services-e96ea.firebaseapp.com",
  projectId: "genius-car-services-e96ea",
  storageBucket: "genius-car-services-e96ea.appspot.com",
  messagingSenderId: "243317633591",
  appId: "1:243317633591:web:b1936e30d9bdf175a945b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;