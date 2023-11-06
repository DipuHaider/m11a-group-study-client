// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeEcbp88irIYY7hsXx79_Tkws3ssu1egg",
  authDomain: "m10a-brand-shop-client.firebaseapp.com",
  projectId: "m10a-brand-shop-client",
  storageBucket: "m10a-brand-shop-client.appspot.com",
  messagingSenderId: "831923181789",
  appId: "1:831923181789:web:7ef00b85fda1bfc324e334",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
