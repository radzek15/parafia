import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow, MDBTextArea } from "mdb-react-ui-kit";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "../../firebase/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

export default function Post() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [releaseDate, setReleaseDate] = useState(new Date());
  const [imageFile, setImageFile] = useState(null);
  const textAreaRef = useRef(null);

  const postCollectionRef = collection(db, "postsCollection");
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const addPost = async () => {
    let imageUrl = "";
    if (imageFile) {
      const storageRef = ref(storage, "NewsGallery/" + imageFile.name);
      await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(storageRef);
    }
    await addDoc(postCollectionRef, {
      title,
      postText,
      releaseDate: serverTimestamp(),
      imageUrl,
      author: { name: auth.currentUser.email, id: auth.currentUser.uid },
    });
    navigate("/aktualnosci");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const textarea = event.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;
      setPostText(value.substring(0, start) + "\n" + value.substring(end));
      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="p-3">
        <MDBCol md="6" lg="6" xl="6" className="mx-auto mb-4">
          <h1 className="text-uppercase text-center text-primary fw-bold mb-4">Utwórz Nowe Ogłoszenie</h1>
          <MDBInput
            label="Tytuł"
            className="mt-3"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></MDBInput>
          <MDBTextArea
            label="Treść Ogłoszenia"
            className="mt-3"
            rows="9"
            onChange={(e) => {
              setPostText(e.target.value);
            }}
            onKeyPress={handleKeyPress}
            value={postText}
            ref={textAreaRef}
          ></MDBTextArea>
          <MDBInput type="file" className="mt-3" onChange={handleImageUpload} />
          <MDBInput
            label="Data i czas publikacji"
            type="datetime-local"
            className="mt-3"
            value={releaseDate.toISOString().slice(0, 16)}
            onChange={(e) => {
              setReleaseDate(new Date(e.target.value));
            }}
          ></MDBInput>
          <div className="d-flex justify-content-end">
            <MDBBtn onClick={addPost} size="lg" className="my-3">
              Dodaj
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
