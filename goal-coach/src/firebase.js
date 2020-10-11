import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBEaHxjlJ8RyprzNkZKfZMYw3i2T389hNc",
    authDomain: "goalcoach-ce0e5.firebaseapp.com",
    databaseURL: "https://goalcoach-ce0e5.firebaseio.com",
    projectId: "goalcoach-ce0e5",
    storageBucket: "goalcoach-ce0e5.appspot.com",
    messagingSenderId: "22735596431",
    appId: "1:22735596431:web:c15aaf68b735817ceab9fa",
    measurementId: "G-XWKHD4031W"
  };

 export const firebaseApp = firebase.initializeApp(firebaseConfig);
 export const goalRef = firebase.database().ref('goals');
 export const completeGoalRef =  firebase.database().ref('completeGoals');
 