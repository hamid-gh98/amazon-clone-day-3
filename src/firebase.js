import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8o9FQ5ageBkPEDZyFuxm0szMOh6xXGOw",
  authDomain: "clone-815f6.firebaseapp.com",
  databaseURL: "https://clone-815f6.firebaseio.com",
  projectId: "clone-815f6",
  storageBucket: "clone-815f6.appspot.com",
  messagingSenderId: "141677229910",
  appId: "1:141677229910:web:f8f5a6a0d9ab3c9c2888f7",
  measurementId: "G-D8438KR82Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
