import React, {useEffect, useState} from "react";
import {MDBBtn, MDBCol, MDBRow} from "mdb-react-ui-kit";
import './HomePage.css'
import {getDownloadURL, listAll, ref} from "firebase/storage";
import {storage} from "../../firebase/firebase";


export default function History() {
	const [imageUrls, setImageUrls] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const folderRef = ref(storage, "gs://parafia-dev-2550c.appspot.com/HomePage/History/"); // Replace with the actual path to your folder in Firebase Storage
      const images = await listAll(folderRef);
      const urls = await Promise.all(images.items.map(async (image) => {
        const imageUrl = await getDownloadURL(image);
        return imageUrl;
      }));
      setImageUrls(urls);
    };
    fetchImageUrls();
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };
	return (
		<div>
			<MDBRow className={'m-4 header-text'} id={'history'}>
				<h1 className={'m-3 fw-bold display-3 text-center'}>Historia</h1>
				<p>Parafia tutejsza jest wymieniana po raz pierwszy w 1306 r. ale zapewne jej początki sięgają II połowy XII w. W 1490 r. czasowo należała do parafii w Leśniowie. W 1916 r. wydzielona została z tej placówki parafia w Choroniu łącznie z Porajem, który później stał się również samodzielną placówką. W 1940 r. granica wytyczona przez Niemców oddziela od Przybynowa Żarki Letnisko, które najpierw stały się filią, a w 1948 r. ekspozyturą i parafią 1957r.</p>
				<p>Pierwszy kościół drewniany p. w. Św. Piotra i Pawła Apostołów wspomniany jest w 1306 r., kiedy został obrabowany przez najemnych żołnierzy. Wspomina Go Jan Długosz w Liber Beneficjorum w 1470 r. Przetrwał on przypuszczalnie ok. 250 lat. W 1595 r. w Przybynowie był już kościół murowany zbudowany prawdopodobnie w połowie XVI w. na miejscu poprzedniego zapewne z fundacji Myszkowskich. Był on krótszy o 1/3 od dzisiejszego kościoła. Wieżę z podłużnym piramidalnym zakończeniem miał miał na froncie. Pokryty był gontem, nie miał sklepienia lecz pułap. Pierwotnie renesansowy, przebudowany został w 1770 r. w stylu barokowym za proboszcza ks. Marcina Koźlickiego przez dziedzica Adama hr. Męcickiego, starostę bodaczowskiego (patrz herb na przodzie chóru i płytę marmurowąnad dawną zakrystią). Został zasklepiony i przyozdobiony ornamentami z gipsu, stacjami drogi krzyżowej, popiersiami apostołów, ewangelistów i świętych. Konsekrowany 22 lipca 1777 r. przez Ignacego Kozierowskiego biskupa sufragana gnieźnieńskiego. W pierwszej połowie XIX w. znacznie podupadł. W 1862 r. poddany został gruntownemu remontowi. Wieżę pokryto wówczas blachą. W 1863 r. konsekrował go ponownie po tym remoncie biskup Maciej Majerczak, administrator diecezji kieleckiej. Kościół ten nie uniknął pożaru, podczas którego stopiły się dwa dzwony umieszczone w wieży kościelnej. Było to w 1894 r. Dzwony ulane potem na miejscu przez Jana Żucha z Żarnowca zabrali Austriacy. Po nieudanym odlewie nowych dzwonów sprowadzono w 1926 r. z Węgrowca obecnie istniejące o wadze 607 kg. W latach 1911-1912 staraniem ks. Adama Adamka powiększono kościół dodając dwa przęsła, arkady, zakrystię i nową kopulastą wieżę. Cały kościół pokryto dachówką.</p>
				<p>W kościele jest kilka obrazów. W ołtarzu obraz Matki Bożej Nieustającej Pomocy z dzieciątkiem. Za dawnych czasów ściany i ołtarze zdobiły kryształowe lustra w liczbie 24. W1962 r. za ks. Stanisława Poroszewskiego wnętrze kościoła zostało odmalowane i odnowiony został ołtarz główny. Za księży Janusza rakowskiego i ks. Romana Cer w latach 1995-1996 kościół pokryto blachą miedzianą.</p>
			</MDBRow>
			<MDBRow>
			<MDBCol size={'2'} className={'d-flex flex-column justify-content-center align-items-start'}>
				<MDBBtn className={'btn-arrow btn-highlight">'} onClick={handlePreviousImage}><i className="fas fa-arrow-left"></i></MDBBtn>
			</MDBCol>
			<MDBCol size={'8'}>
				<img className={'my-3 rounded mx-auto d-block img-fluid img-circle rounded-circle'} style={{ height: '500px'}} src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
			</MDBCol>
			<MDBCol size={'2'} className={'d-flex flex-column justify-content-center align-items-end'}>
				<MDBBtn className={'btn-arrow btn-highlight'} onClick={handleNextImage}><i className="fas fa-arrow-right"></i></MDBBtn>
			</MDBCol>
    </MDBRow>
		</div>

	)
}