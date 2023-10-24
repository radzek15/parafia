import React from "react";
import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";


export default function FundTitle() {
	return (
		<MDBCard className={'my-3 p-3 bg-transparent'}>
			<MDBCardTitle className={'text-center fw-bold'}>Tytuł Projektu</MDBCardTitle>
			<MDBCardBody className={'h5'} style={{textAlign: 'justify'}}>Prace remontowe i renowacyjne zabytkowego kościoła p.w. Św. Piotra i Pawła w Przybynowie sposobem na zabezpieczenie obiektu dziedzictwa kulturowego</MDBCardBody>
		</MDBCard>
	);
}