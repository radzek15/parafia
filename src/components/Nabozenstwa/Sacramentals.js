import React from "react";


export default function Sacramentals() {
	return (
		<div>
			<ul className={'list-group list-group-light'}>
				<li className={'list-group-item fw-bold h3'}>Sakrament Pokuty</li>
				<li className="list-group-item">Spowiedź jest udzielana przed każdą Mszą Świętą</li>
				<li className="list-group-item">Dodatkowo spowiedź w każdy pierwszy piątek miesiąca</li>
			</ul>

			<ul className={'list-group list-group-light'}>
				<li className={'list-group-item fw-bold h3'}>Nabożeństwa</li>
				<li className="list-group-item">I Piątek Miesiąca po Mszy Świętej - Nabożeństwo do Serca Pana Jezusa</li>
				<li className="list-group-item">I Sobota Miesiąca godzinę przed Mszą Świętą - Nabożeństwo do Serca Matki Bożej</li>
				<li className="list-group-item">III piątek miesiąca po Mszy Świętej - Nabożeństwo do Miłosierdzia Bożego</li>
			</ul>

			<ul className={'list-group list-group-light'}>
				<li className={'list-group-item fw-bold h3'}>Nowenny</li>
				<li className="list-group-item">Środa podczas Mszy Świętej - Nowenna do Matki Bożej Nieustającej Pomocy w każdą </li>
			</ul>
		</div>
	);
}