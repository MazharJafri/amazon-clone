import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBQPZi8SfONUn1PaRC5Tiiz5wcwkUuHvRI",
        authDomain: "clone-1300e.firebaseapp.com",
        databaseURL: "https://clone-1300e.firebaseio.com",
        projectId: "clone-1300e",
        storageBucket: "clone-1300e.appspot.com",
        messagingSenderId: "1037302208488",
        appId: "1:1037302208488:web:280f9616408ddf0be8b65d",
        measurementId: "G-HQZPJ9HCLH"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };