// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyDWJhUlBMBMQB3H2_Jvkh_C0G-2AtbO5N4",
  //   authDomain: "insigene-ffd59.firebaseapp.com",
  //   projectId: "insigene-ffd59",
  //   storageBucket: "insigene-ffd59.appspot.com",
  //   messagingSenderId: "744257121365",
  //   appId: "1:744257121365:web:d32703074c7f09a8c038dc"
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
