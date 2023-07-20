import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
const auth = getAuth(app);
export const UserContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth)
      .then(() => {})
      .catch(() => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInformation = {
    user,
    createNewUser,
    login,
    logOut,
    loading,
  };
  return (
    <UserContext.Provider value={authInformation}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
