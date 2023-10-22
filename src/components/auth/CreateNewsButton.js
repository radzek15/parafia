import React from "react";
import {useNavigate} from "react-router-dom";
import {MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function CreateNewsButton({user, logout}) {

	const navigate = useNavigate()

	const handleNewsButton = () => {
		navigate('/create-news')
	}
	return (
		<div className="d-flex justify-content-center">
			<MDBBtn onClick={handleNewsButton} size="lg" className="m-3">
				<MDBIcon icon="plus" className="me-3" />
				Dodaj Ogłoszenie
			</MDBBtn>
		</div>
	);
}