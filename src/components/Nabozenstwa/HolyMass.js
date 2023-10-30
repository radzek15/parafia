import React, {useEffect, useState} from "react";
import {ref, getDownloadURL} from "firebase/storage";
import {storage} from '../../firebase/firebase'

export default function HolyMass() {
	const [imageUrl, setImageUrl] = useState('');
	useEffect(() => {
		const storageRef = ref(storage, 'gs://parafia-dev-2550c.appspot.com/MassesGallery/porzadekMszy.jpg');
		getDownloadURL(storageRef).then((url) => {setImageUrl(url);}).catch((error) => {
			console.log(error);
		});
	}, []);
	return (
		<div className={'container fluid'}>
			<h3 className={'fw-bold'}>Porządek Mszy Świętej</h3>
        <ul className={'list-group list-group-flush bg-transparent'}>
          <li className="list-group-item fw-bold h5 bg-transparent my-3">Niedziela</li>
          <li className="list-group-item bg-transparent my-2">8:00 - Przybynów</li>
          <li className="list-group-item bg-transparent my-2">10:00 - Suliszowice - I i III niedziela</li>
          <li className="list-group-item bg-transparent my-2">10:00 - Wysoka Lelowska - II i IV niedziela</li>
          <li className="list-group-item bg-transparent my-2">11:30 - Przybynów</li>
          <li className="list-group-item fw-bold h5 bg-transparent my-3">Poniedziałek | Środa | Piątek | Sobota</li>
          <li className="list-group-item bg-transparent my-2">18:00 - czas letni</li>
          <li className="list-group-item bg-transparent my-2">17:00 - czas zimowy</li>
          <li className="list-group-item fw-bold h5 bg-transparent my-3">Wtorek | Czwartek</li>
          <li className="list-group-item bg-transparent my-2">7:00 - czas letni</li>
          <li className="list-group-item bg-transparent my-2">8:00 - czas zimowy</li>
        </ul>
			<img src={imageUrl} className={'my-3 img-fluid'} alt="Msze Święte" />
		</div>
	);
}