// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getStorage} from 'firebase/storage';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyBBy_sT95bTrP4x7lxKtP5EvxZO19YVc1s",
    authDomain: "longtpt-17d1f.firebaseapp.com",
    projectId: "longtpt-17d1f",
    storageBucket: "longtpt-17d1f.appspot.com",
    messagingSenderId: "976498657861",
    appId: "1:976498657861:web:3cf37b11e0c2fb33bc712c",
    measurementId: "G-FXYX9PR0MN"
};


// Initialize Firebase
const stories = initializeApp(firebaseConfig, 'stories');
const dbs = getFirestore(app);

export {
    stories,
    dbs
}