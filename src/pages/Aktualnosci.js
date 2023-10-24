import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ShowPosts from "../components/Posting/ShowPosts";
import { UserAuth } from "../context/AuthContext";
import AdminNavBar from "../components/NavBar/AdminNavBar";
import CreateNewsButton from "../components/auth/CreateNewsButton";
import { db } from "../firebase/firebase";

export default function Aktualnosci() {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "postsCollection");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, );

  return (
    <div>
      {UserAuth().user ? <AdminNavBar /> : <NavBar />}
      <h1 className={ "fw-bold text-center mt-3 text-primary" } style={{ fontFamily: "'Dancing Script', cursive", fontSize: "5rem"}}>Aktualności</h1>
      {UserAuth().user && <CreateNewsButton />}
			<ShowPosts postList={postList} setPostList={setPostList}/>
      <Footer />
    </div>
  );
}
