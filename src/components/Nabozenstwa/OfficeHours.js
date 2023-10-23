import React, {useEffect, useState} from "react";
import {ref, getDownloadURL} from "firebase/storage";
import {storage} from '../../firebase/firebase'


export default function OfficeHours() {
	const [imageUrl, setImageUrl] = useState('');
	useEffect(() => {
		const storageRef = ref(storage, 'gs://parafia-dev-2550c.appspot.com/MassesGallery/kancelaria.jpg');
		getDownloadURL(storageRef).then((url) => {setImageUrl(url);}).catch((error) => {
			console.log(error);
		});
	}, []);


	return (
		<div>
			<h3 className={'fw-bold'}>Godziny otwarcia kancelarii</h3>
			<ul className={'list-group list-group-light'}>
				<li className="list-group-item fw-bold h5">Środa | Piątek | Sobota</li>
				<li className="list-group-item">17:00 - czas letni</li>
				<li className="list-group-item">16:00 - czas zimowy</li>
				<li className="list-group-item fw-bold">W sprawach pilnych (pogrzeb, wizyta u chorego) prosimy o kontakt telefoniczny/mailowy</li>
			</ul>
			<img className={'my-3'} src={imageUrl} alt="Firebase Storage Image" />
		</div>
	);
}