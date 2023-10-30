import React, {useEffect, useState} from "react";
import {ref, getDownloadURL} from "firebase/storage";
import {storage} from '../../firebase/firebase'


export default function FundTitlePhoto() {
	const [imageUrl, setImageUrl] = useState('');
	useEffect(() => {
		const storageRef = ref(storage, 'gs://parafia-dev-2550c.appspot.com/FundGallery/photoTitleFund/fueur.jpg');
		getDownloadURL(storageRef).then((url) => {setImageUrl(url);}).catch((error) => {
			console.log(error);
		});
	}, []);
	return <img className={'my-3 rounded mx-auto d-block img-fluid'} src={imageUrl} alt="Fundusz Euro" />
}