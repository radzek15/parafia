import React from "react";
import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";


export default function FundBenefactor() {
	return (
		<MDBCard className={'my-3 p-3'}>
			<MDBCardTitle className={'text-center fw-bold'}>Beneficjent</MDBCardTitle>
			<MDBCardBody className={'h5'} style={{textAlign: 'justify'}}>Parafia Rzymsko-katolicka p.w. Świętego Mikołaja w Przybynowie</MDBCardBody>
		</MDBCard>
	);
}