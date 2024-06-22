// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3JLuc2fsLdl-DiNDDa-IOJw0VqVK0tq4",
  authDomain: "new-netflix-app-b1f47.firebaseapp.com",
  projectId: "new-netflix-app-b1f47",
  storageBucket: "new-netflix-app-b1f47.appspot.com",
  messagingSenderId: "338080334008",
  appId: "1:338080334008:web:5a17ba1a38b7fa4000f44d",
  measurementId: "G-WKTLM5Z6PR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
