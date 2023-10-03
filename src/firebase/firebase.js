import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7R1OetzJyExwu58HsvHsU7fB_131xtM0",
  authDomain: "parafia-dev-2550c.firebaseapp.com",
  projectId: "parafia-dev-2550c",
  storageBucket: "parafia-dev-2550c.appspot.com",
  messagingSenderId: "411360416657",
  appId: "1:411360416657:web:b1912f697576efa4084030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app