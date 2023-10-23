import React from "react";
import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";


export default function FundCosts() {
	return (
		<MDBCard className={'my-3 p-3'}>
			<MDBCardTitle className={'text-center fw-bold'}>Wartość projektu</MDBCardTitle>
			<MDBCardBody className="list-group-item m-3">koszt całkowity: 1 207 085,84 PLN</MDBCardBody>
			<MDBCardTitle className={'text-center fw-bold mt-3'}>Wkład Funduszy Europejskich</MDBCardTitle>
			<MDBCardBody className="list-group-item m-3">środki EFRR: 1 026 022,97 PLN</MDBCardBody>
			<MDBCardBody className="list-group-item m-3">Projekt dofinansowany przez Unię Europejską z Europejskiego Funduszu Rozwoju Regionalnego w ramach Regionalnego Programu Operacyjnego Województwa Śląskiego na lata 2014-2020</MDBCardBody>
		</MDBCard>
	);
}