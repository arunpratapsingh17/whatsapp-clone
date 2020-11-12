import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAjcUU8q4QOW74Wpq13oLkiT2ZCTKwHX1E",
  authDomain: "whatsapp-clone-29018.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-29018.firebaseio.com",
  projectId: "whatsapp-clone-29018",
  storageBucket: "whatsapp-clone-29018.appspot.com",
  messagingSenderId: "475594965450",
  appId: "1:475594965450:web:6d6195b3d5bb78cbb60f33",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
