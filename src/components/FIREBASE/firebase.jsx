import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyDbdu6GekObmd8EAKyMAynsOYDGGwznWfI',
    authDomain: 'mccproject-1d16a.firebaseapp.com',
    databaseURL: 'https://mccproject-1d16a.firebaseio.com',
    projectId: 'mccproject-1d16a',
    storageBucket: 'mccproject-1d16a.appspot.com',
    messagingSenderId: '896352777210',
    appId: '1:896352777210:android:a2e1106fec358efc702a43',
  };
  
  
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db };