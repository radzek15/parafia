import React from "react";
import {MDBBtn, MDBContainer, MDBIcon} from "mdb-react-ui-kit";
import NavBar from "../components/NavBar/NavBar";
import {UserAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function AccountDashboard() {
	const {user, logout} = UserAuth();
	const navigate = useNavigate()
	const handleLogout = async () => {
		try {
			await logout()
			navigate('/')
		} catch (e) {
			console.log(e.message)
		}
	}

	return(
		<div>
			<NavBar />
			<MDBContainer>
				<h1>Użytkownik:</h1>
				<h1>Email: {user.email}</h1>
				<MDBBtn onClick={handleLogout} size='lg'>Logout</MDBBtn>
			</MDBContainer>
		</div>
	);
}