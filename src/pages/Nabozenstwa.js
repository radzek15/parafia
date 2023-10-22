import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {UserAuth} from "../context/AuthContext";
import AdminNavBar from "../components/NavBar/AdminNavBar";

export default function Nabozenstwa() {
	return (
		<div>
			{UserAuth().user ? <AdminNavBar />: <NavBar />}
			<h1 className={ "fw-bold text-center my-3 text-primary" } style={{ fontFamily: "'Dancing Script', cursive", fontSize: "5rem"}}>Nabożeństwa</h1>
			<Footer />
		</div>
	);
}