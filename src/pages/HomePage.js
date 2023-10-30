import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import AdminNavBar from "../components/NavBar/AdminNavBar";
import {UserAuth} from "../context/AuthContext";
import {MDBContainer} from "mdb-react-ui-kit";
import About from "../components/HomePage/About";
import HomeNavBar from "../components/NavBar/HomeNavBar";
import History from "../components/HomePage/History";
import Patrons from "../components/HomePage/Patrons";
import Priests from "../components/HomePage/Priests";

export default function HomePage() {
	return (
		<div>
			{UserAuth().user ? <AdminNavBar />: <NavBar />}
			<HomeNavBar />
			<h1 className={ "fw-bold text-center mt-3 text-primary" }
					style={{ fontFamily: "'Dancing Script', cursive", fontSize: "5rem"}}>
				Parafia św. Mikołaja w Przybynowie</h1>
			<MDBContainer fluid={true}>
				<About />
				<History />
				<Patrons />
				<Priests />
			</MDBContainer>
			<Footer />
		</div>
	);
}