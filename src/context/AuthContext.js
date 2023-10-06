import React, {createContext, useEffect, useState} from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithPopup
} from "firebase/auth"
import {auth, googleProvider} from '../firebase/firebase'

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
	const [user, setUser] = useState({})
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signInWithGoogle = () => {
		return (signInWithPopup(auth, googleProvider).then((result) => {
      localStorage.setItem("isAuth", true)
		}))
  };

	const logout = () => {
		return signOut(auth)
	};

   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser);
     });
     return () => {
       unsubscribe();
     };
   }, []);

	return (
		<UserContext.Provider value={{ createUser, user, logout, signIn, signInWithGoogle }}>
			{children}
		</UserContext.Provider>
	)
}

export const UserAuth = () => {
	return React.useContext(UserContext)
}

