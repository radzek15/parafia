import React from "react";
import {MDBCard, MDBCardTitle, MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";


export default function FundGoals() {
	return (
		<MDBCard className={'my-3 p-3'}>
			<MDBCardTitle className={'text-center fw-bold'}>Cele Projektu</MDBCardTitle>
			<MDBListGroup className={'list-group list-group-light'}>
				<MDBListGroupItem className="list-group-item ms-3">Renowacja zabytkowego obiektu kościoła parafialnego</MDBListGroupItem>
				<MDBListGroupItem className="list-group-item ms-3">Zachowanie dziedzictwa kulturowego dla obecnych i przyszłych pokoleń</MDBListGroupItem>
				<MDBListGroupItem className="list-group-item ms-3">Uruchomienie cyklu dorocznych imprez kulturalnych</MDBListGroupItem>
				<MDBListGroupItem className="list-group-item ms-3">Wzrost oferty kulturalnej zabytku i miasta</MDBListGroupItem>
				<MDBListGroupItem className="list-group-item ms-3">Renowacja zabytku i zwiększenie jego atrakcyjności turystycznej</MDBListGroupItem>
			</MDBListGroup>
		</MDBCard>
	);
}