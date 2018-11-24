import Rebase from "re-base";
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAP_LnOznCUK2SKkSAHuOBaKXSjx8hNK8w",
    authDomain: "learn-catch-of-the-day.firebaseapp.com",
    databaseURL: "https://learn-catch-of-the-day.firebaseio.com",
    projectId: "learn-catch-of-the-day",
    storageBucket: "learn-catch-of-the-day.appspot.com",
	messagingSenderId: "859620840304"
};

const firebaseApp = firebase.initializeApp( config );

const base = Rebase.createClass( firebaseApp.database() );

export { firebaseApp };
export default base;