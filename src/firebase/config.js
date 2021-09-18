import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjCYTnSo2XCmcGpjiR8b2DQJtFXfJhREw",
  authDomain: "las-cholas-tejidos.firebaseapp.com",
  projectId: "las-cholas-tejidos",
  storageBucket: "las-cholas-tejidos.appspot.com",
  messagingSenderId: "365022444351",
  appId: "1:365022444351:web:2d36a3a596ecb8d792718a",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};


