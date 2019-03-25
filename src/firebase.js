import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBrASX3jeNI3308SC8-di43DLTVosCOBlI",
  authDomain: "hot-takes-97891.firebaseapp.com",
  databaseURL: "https://hot-takes-97891.firebaseio.com",
  projectId: "hot-takes-97891",
  storageBucket: "hot-takes-97891.appspot.com",
  messagingSenderId: "648922911062"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
