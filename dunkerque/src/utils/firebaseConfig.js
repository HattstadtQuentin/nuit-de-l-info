import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBWMRYDCi3pp7Zc7KgpsVh9_wMtxWkLefo",
    authDomain:  "nuit-de-l-info-2ba7b.firebaseapp.com",
    projectId: "nuit-de-l-info-2ba7b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export  const getMarkers = async () => {
  const markers = [];
  await firebase.firestore().collection('events').get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
      markers.push(doc.data());
    });
  });
  console.log(markers);
  return markers;
}


export const auth = firebase.auth();
firebase.auth().useDeviceLanguage();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);