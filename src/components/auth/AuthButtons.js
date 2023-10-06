import React from "react";
import {useNavigate} from "react-router-dom";
import {MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

export default function AuthButtons({user, logout}) {

	const navigate = useNavigate()
	const handleLogout = async () => {
		try {
			await logout()
			navigate('/')
		} catch (e) {
			console.log(e.message)
		}
	}

	const handleNewsButton = () => {
		navigate('/create-news')
	}

	return (
		<>
			<MDBContainer className={'p-3 mt-3'}>
				<MDBBtn onClick={handleLogout} size='lg' className={'m-3'}>Logout</MDBBtn>
				<MDBBtn onClick={handleNewsButton} size='lg' className={'m-3'}><MDBIcon icon='plus' className='me-3' />Dodaj Ogłoszenie</MDBBtn>
			</MDBContainer>
		</>
	)
}