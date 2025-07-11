
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebase.config";

// Initialize Firebase
const initializeFirebase = () => {
  if (typeof window !== 'undefined') {
    if (getApps().length === 0) {
        return initializeApp(firebaseConfig);
    } else {
      return getApps()[0];
    }
  }
  // On the server, return a placeholder or null
  return null;
};

const app = initializeFirebase();
const auth = app ? getAuth(app) : null;

export { auth };
