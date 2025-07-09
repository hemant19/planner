
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const initializeFirebase = async () => {
  if (typeof window !== 'undefined') {
    if (getApps().length === 0) {
      // In the browser, initialize with either local config or hosting config
      if (window.location.hostname === 'localhost') {
        const { firebaseConfig } = await import("./firebase.config");
        return initializeApp(firebaseConfig);
      } else {
        // The fetch for init.json is handled by the Firebase Hosting script
        return initializeApp({});
      }
    } else {
      return getApps()[0];
    }
  }
  // On the server, return a placeholder or null
  return null;
};

let app: FirebaseApp | null;
initializeFirebase().then((app) => {
  app = app;
});
const auth = app ? getAuth(app) : null;

export { auth };
