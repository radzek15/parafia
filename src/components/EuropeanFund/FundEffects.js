import React from "react";
import {MDBCard, MDBCardTitle, MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";


export default function FundEffects() {
	return (
		<MDBCard className={'my-3 p-3'}>
			<MDBCardTitle className={'text-center fw-bold'}>Planowane Efekty</MDBCardTitle>
			<MDBListGroup className={'list-group list-group-light'}>
				<MDBListGroupItem className="list-group-item ms-3">Objęcie wsparciem zabytku w celu wykonania prac remontowych i konserwatorskich</MDBListGroupItem>
				<MDBListGroupItem className="list-group-item ms-3">Wzrost liczby osób odwiedzających zabytkowy kościół</MDBListGroupItem>
			</MDBListGroup>
		</MDBCard>
	);
}