import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import AdminNavBar from "../components/NavBar/AdminNavBar";
import {UserAuth} from "../context/AuthContext";

export default function HomePage() {
	return (
		<div>
			{UserAuth().user ? <AdminNavBar />: <NavBar />}
			<h1>home Page</h1>
			<Footer />
		</div>
	);
}