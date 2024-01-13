import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBpf6G7HatfIqR4B5tXyoN3-3PAX-6PyGA",
    authDomain: "inotes-3d036.firebaseapp.com",
    projectId: "inotes-3d036",
    storageBucket: "inotes-3d036.appspot.com",
    messagingSenderId: "956300677117",
    appId: "1:956300677117:web:2b4820895e063c5b37d394"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;