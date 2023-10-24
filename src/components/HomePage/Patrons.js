import React, {useEffect, useState} from "react";
import {MDBBtn, MDBCol, MDBRow} from "mdb-react-ui-kit";
import './HomePage.css'
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../../firebase/firebase";

export default function Patrons() {
	const [activeColumn, setActiveColumn] = useState(0);

  const handlePreviousColumn = () => {
    setActiveColumn((prevColumn) => (prevColumn - 1 + 2) % 2);
  };

  const handleNextColumn = () => {
    setActiveColumn((prevColumn) => (prevColumn + 1) % 2);
  };

	const [image1Url, setImage1Url] = useState('');
	useEffect(() => {
		const storageRef = ref(storage, 'gs://parafia-dev-2550c.appspot.com/HomePage/Patrons/SwietyMikolaj.jpg');
		getDownloadURL(storageRef).then((url) => {setImage1Url(url);}).catch((error) => {
			console.log(error);
		});
	}, []);

		const [image2Url, setImage2Url] = useState('');
	useEffect(() => {
		const storageRef = ref(storage, 'gs://parafia-dev-2550c.appspot.com/HomePage/Patrons/swPiotrPawel.jpg');
		getDownloadURL(storageRef).then((url) => {setImage2Url(url);}).catch((error) => {
			console.log(error);
		});
	}, []);

	return (
		<MDBRow className={'m-4 header-text'} id={'patrons'}>
			<h1 className={'m-3 fw-bold display-3 text-center'}>Patroni</h1>
			<MDBCol size={'2'} className={'d-flex flex-column justify-content-center align-items-start'}>
				<MDBBtn className={'btn-arrow btn-highlight">'} onClick={handlePreviousColumn}><i className="fas fa-arrow-left"></i></MDBBtn>
			</MDBCol>
			<MDBCol size={'8'} className={activeColumn === 0 ? "" : "d-none"}>
				<h2 className={'text-primary'}>Św. Mikołaj z Miry</h2>
				<img className={'my-3 rounded mx-auto d-block img-fluid img-circle rounded-circle'} src={image1Url} alt="Mikolaj" />
				<p>znany również jako Mikołaj z Bari – święty katolicki i prawosławny. Najstarsze przekazy o nim pochodzą z VI wieku. Według średniowiecznej hagiografii żył na przełomie III i IV wieku (legendarne przekazy twierdzą, że urodził się około roku 270, a zmarł 6 grudnia między rokiem 345 a 352), był biskupem Miry w Licji, wsławił się cudami oraz pomocą biednym i potrzebującym. Przez wieki był jednym z najbardziej czczonych świętych na Zachodzie i Wschodzie. Największe jego sanktuarium znajduje się we włoskim Bari. Współczesna baśniowa postać Świętego Mikołaja, wzorowana na św. Mikołaju z Miry, jest wykorzystywana w kulturze popularnej w czasie świąt Bożego Narodzenia</p>
			</MDBCol>
			<MDBCol size={'8'} className={activeColumn === 1 ? "" : "d-none"}>
				<h2 className={'text-primary'}>Sw. Piotr i Paweł</h2>
				<img className={'my-3 rounded mx-auto d-block img-fluid img-circle rounded-circle'} src={image2Url} alt="Pjoter i Paweł" />
				<p>Apostołowie, Św. Piotr – pierwotnie Szymon – pochodził z Betsaidy nad Jeziorem Galilejskim, był uczniem wybranym przez Jezusa do pełnienia posługi prymatu w Kościele, gorliwość misyjna św. Pawła noszącego przed nawróceniem imię Szaweł sprawiła, że w bardzo wielu miejscach głosił Ewangelię i zakładał Kościoły czym zyskał miano „Apostoła Narodów”. Obaj ponieśli śmierć męczeńską w Rzymie w czasie prześladowania za cesarza Nerona</p>
			</MDBCol>
			<MDBCol size={'2'} className={'d-flex flex-column justify-content-center align-items-end'}>
				<MDBBtn className={'btn-arrow btn-highlight'} onClick={handleNextColumn}><i className="fas fa-arrow-right"></i></MDBBtn>
			</MDBCol>
		</MDBRow>
	);
}