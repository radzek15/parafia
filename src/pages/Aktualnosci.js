import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {UserAuth} from "../context/AuthContext";
import AdminNavBar from "../components/NavBar/AdminNavBar";
import CreateNewsButton from "../components/auth/CreateNewsButton";
export default function Aktualnosci() {
	return (
		<div>
			{UserAuth().user ? <AdminNavBar />: <NavBar />}
			{UserAuth().user && <CreateNewsButton />}
			<Footer />
		</div>
	);
}