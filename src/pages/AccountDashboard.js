import React from "react";
import AuthButtons from "../components/auth/AuthButtons";
import {UserAuth} from "../context/AuthContext";
import AdminNavBar from "../components/NavBar/AdminNavBar";

export default function AccountDashboard() {
	const {user, logout} = UserAuth();
	return(
		<div>
			<AdminNavBar />
			<h1 className={'text-center'}>Użytkownik: {user.email}</h1>
			<AuthButtons user={user} logout={logout}/>
		</div>
	);
}