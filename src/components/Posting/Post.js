import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow, MDBTextArea } from "mdb-react-ui-kit";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

export default function Post() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [releaseDate, setReleaseDate] = useState(new Date());

  const postCollectionRef = collection(db, "postsCollection");
  const navigate = useNavigate();

  const addPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      releaseDate: serverTimestamp(),
      author: { name: auth.currentUser.email, id: auth.currentUser.uid },
    });
    navigate("/aktualnosci");
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
          ></MDBTextArea>
          <MDBInput
            label="Data i czas publikacji"
            type="datetime-local"
            className="mt-3"
            value={releaseDate.toISOString().slice(0, 16)} // Format the date value for the input field
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
