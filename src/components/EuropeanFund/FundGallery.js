import React, { useState, useEffect } from "react";
import { MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from "../../firebase/firebase";


export default function FundGallery() {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const folderRef = ref(storage, "gs://parafia-dev-2550c.appspot.com/FundGallery/");
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
    <MDBRow>
			<MDBCol size={'2'} className={'d-flex flex-column justify-content-center align-items-start'}>
				<MDBBtn className={'btn-arrow btn-highlight">'} onClick={handlePreviousImage}><i className="fas fa-arrow-left"></i></MDBBtn>
			</MDBCol>
			<MDBCol size={'8'}>
				<img className={'my-3 rounded mx-auto d-block img-fluid img-circle'} style={{ height: '750px'}} src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
			</MDBCol>
			<MDBCol size={'2'} className={'d-flex flex-column justify-content-center align-items-end'}>
				<MDBBtn className={'btn-arrow btn-highlight'} onClick={handleNextImage}><i className="fas fa-arrow-right"></i></MDBBtn>
			</MDBCol>
    </MDBRow>
  );
}
