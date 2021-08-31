import firebase from 'firebase/app';
import 'firebase/auth';

export const auth=firebase.initializeApp( {
    apiKey: "AIzaSyBd1LOrCEPdMQpu3JeZLXsxOIBcqS3eMfg",
    authDomain: "chit-chat-engine.firebaseapp.com",
    projectId: "chit-chat-engine",
    storageBucket: "chit-chat-engine.appspot.com",
    messagingSenderId: "879468407214",
    appId: "1:879468407214:web:bb364451a70b55b376803f"
  }).auth();