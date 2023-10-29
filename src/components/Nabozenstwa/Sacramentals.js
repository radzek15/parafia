import React from "react";


export default function Sacramentals() {
	return (
		<div className={'container fluid'}>
			<ul className={'list-group list-group-flush'}>
				<li className={'list-group-item fw-bold h3 bg-transparent my-3'}>Sakrament Pokuty</li>
				<li className="list-group-item bg-transparent my-2">Spowiedź jest udzielana przed każdą Mszą Świętą</li>
				<li className="list-group-item bg-transparent my-2">Dodatkowo spowiedź w każdy pierwszy piątek miesiąca</li>
			</ul>

			<ul className={'list-group list-group-flush'}>
				<li className={'list-group-item fw-bold h3 bg-transparent my-3'}>Nabożeństwa</li>
				<li className="list-group-item bg-transparent my-2">I Piątek Miesiąca po Mszy Świętej - Nabożeństwo do Serca Pana Jezusa</li>
				<li className="list-group-item bg-transparent my-2">I Sobota Miesiąca godzinę przed Mszą Świętą - Nabożeństwo do Serca Matki Bożej</li>
				<li className="list-group-item bg-transparent my-2">III piątek miesiąca po Mszy Świętej - Nabożeństwo do Miłosierdzia Bożego</li>
			</ul>

			<ul className={'list-group list-group-flush mb-4'}>
				<li className={'list-group-item fw-bold h3 bg-transparent my-3'}>Nowenny</li>
				<li className="list-group-item bg-transparent my-2">Środa podczas Mszy Świętej - Nowenna do Matki Bożej Nieustającej Pomocy w każdą </li>
			</ul>
		</div>
	);
}