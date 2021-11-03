import { getFirestore } from "@firebase/firestore";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBx4COcHao13DTh1EL7cP1biRkto200JAk",
  authDomain: "todoist-clone-4cee0.firebaseapp.com",
  databaseURL: "https://todoist-clone-4cee0-default-rtdb.firebaseio.com",
  projectId: "todoist-clone-4cee0",
  storageBucket: "todoist-clone-4cee0.appspot.com",
  messagingSenderId: "134420147754",
  appId: "1:134420147754:web:e2fa7b4397d3f4b21b1d53",
  measurementId: "G-455735XWG8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore();
export { app as firebase, db };
