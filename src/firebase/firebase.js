import * as firebase from 'firebase';
/*import * as admin from 'firebase-admin';
import adminkey from './adminkey.json';

admin.initializeApp({
  credential: admin.credential.cert(adminkey),
  databaseURL: "https://liberameappp.firebaseio.com"
});
*/
var firebaseConfig = {
    apiKey: "AIzaSyCQhU_RJFHmG6thm_jB1uI2UexYjY-fvP4",
    authDomain: "liberameappp.firebaseapp.com",
    databaseURL: "https://liberameappp.firebaseio.com",
    projectId: "liberameappp",
    storageBucket: "liberameappp.appspot.com",
    messagingSenderId: "184965080963",
    appId: "1:184965080963:web:3fcba0cb8c2cda4cfef8b6",
    measurementId: "G-17VEXQF958"
  };
var app = firebase.initializeApp(firebaseConfig);
var facebook = new firebase.auth.FacebookAuthProvider();
var google = new firebase.auth.GoogleAuthProvider();
//var google = app.auth.GoogleAuthProvider(); //Así tira error por si acaso, tiene que ser una nueva instancia
var bd = app.firestore();

export { app, google, bd, facebook };