import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {UserAuth} from "../context/AuthContext";
import AdminNavBar from "../components/NavBar/AdminNavBar";
import {MDBContainer} from "mdb-react-ui-kit";
import FundTitle from "../components/EuropeanFund/FundTitle";
import FundBenefactor from "../components/EuropeanFund/FundBenefactor";
import FundGoals from "../components/EuropeanFund/FundGoals";
import FundEffects from "../components/EuropeanFund/FundEffects";
import FundCosts from "../components/EuropeanFund/FundCosts";
import FundTitlePhoto from "../components/EuropeanFund/FundTitlePhoto";
import FundGallery from "../components/EuropeanFund/FundGallery";


export default function Funds() {
	return (
		<>
			{UserAuth().user ? <AdminNavBar />: <NavBar />}
			<h1 className={ "fw-bold text-center mt-3 text-primary" } style={{ fontFamily: "'Dancing Script', cursive", fontSize: "5rem"}}>Fundusz Europejski</h1>
			<FundTitlePhoto />
			<MDBContainer>
				<FundTitle />
				<FundBenefactor />
				<FundGoals />
				<FundEffects />
				<FundCosts />
				<FundGallery />
			</MDBContainer>
			<Footer />
		</>


	);
}