import firebase from "firebase";


const config = {
    apiKey: "AIzaSyAzHRFLi9DE6Oys-fWoGJNf8AdaXdmuxEc",
    authDomain: "photojournal-29971.firebaseapp.com",
    databaseURL: "https://photojournal-29971.firebaseio.com/",
    storageBucket: "gs://photojournal-29971.appspot.com/"
};

firebase.initializeApp(config);

const db = firebase.database();

export default db;