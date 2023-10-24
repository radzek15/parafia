import React from "react";
import {MDBCard, MDBCardTitle, MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";


export default function FundGoals() {
	return (
		<MDBCard className={'my-3 p-3 bg-transparent'}>
			<MDBCardTitle className={'text-center fw-bold'}>Cele Projektu</MDBCardTitle>
			<MDBListGroup className={'list-group list-group-flush'}>
				<MDBListGroupItem className="list-group-item ms-3 bg-transparent my-2">Renowacja zabytkowego obiektu kościoła parafialnego</MDBListGroupItem>
				<MDBListGroupItem className="list-group-item ms-3 bg-transparent my-2">Zachowanie dziedzictwa kulturowego dla obecnych i przyszłych pokoleń</MDBListGroupItem>
				<MDBListGroupItem className="list-group-item ms-3 bg-transparent my-2">Uruchomienie cyklu dorocznych imprez kulturalnych</MDBListGroupItem>
				<MDBListGroupItem className="list-group-item ms-3 bg-transparent my-2">Wzrost oferty kulturalnej zabytku i miasta</MDBListGroupItem>
				<MDBListGroupItem className="list-group-item ms-3 bg-transparent my-2">Renowacja zabytku i zwiększenie jego atrakcyjności turystycznej</MDBListGroupItem>
			</MDBListGroup>
		</MDBCard>
	);
}