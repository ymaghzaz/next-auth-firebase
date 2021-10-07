import firebase from "firebase";
import { getStorage } from "firebase/storage";
export function initialize() {
  // Initialize Firebase
  console.log(firebase.apps, firebase.apps.length);
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyCGhuN2VytrTxhRfiibbX2vG2wHqZkt_5I",
      authDomain: "familly-managment.firebaseapp.com",
      projectId: "familly-managment",
      storageBucket: "familly-managment.appspot.com",
      messagingSenderId: "457122305877",
      appId: "1:457122305877:web:306bd73afcf1992fb281dc",
    });
  }
}

initialize();

const signInWithEmailAndPassword = async (email, password) => {
  const data = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return data;
};

const uploadFileToStorage = (file) => {
  firebase.storage().ref(`images/${file.name}`).put(file);
};

export { signInWithEmailAndPassword, uploadFileToStorage };
