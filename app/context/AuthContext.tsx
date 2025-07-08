import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  type User, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email, password) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
  signInWithGoogle: async () => {},
  signInWithFacebook: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe: () => void = () => {};
    if (auth) {
      unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      });
    }
    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    if (auth) {
      await signInWithEmailAndPassword(auth, email, password);
    }
  };

  const signOut = async () => {
    if (auth) {
      await firebaseSignOut(auth);
    }
  };

  const signInWithGoogle = async () => {
    if (auth) {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    }
  };

  const signInWithFacebook = async () => {
    if (auth) {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
    }
    
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, signInWithGoogle, signInWithFacebook }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 