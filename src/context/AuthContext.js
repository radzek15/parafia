import React, {createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"
import {auth as au} from '../firebase/firebase'

const UserContext = createContext()

export const AuthContextProviderd = ({children}) => {
	const [user, setUser] = useState({})
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(au, email, password)
	}

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(au, email, password);
	}

	const logout = () => {
		return signOut(au)
	}

   useEffect(() => {
     const unsubscribe = onAuthStateChanged(au, (currentUser) => {
       console.log(currentUser);
       setUser(currentUser);
     });
     return () => {
       unsubscribe();
     };
   }, []);

	return (
		<UserContext.Provider value={{ createUser, user, logout, signIn }}>
			{children}
		</UserContext.Provider>
	)
}

export const UserAuth = () => {
	return React.useContext(UserContext)
}