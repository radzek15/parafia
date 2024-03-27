import React, { useState } from "react";
import { MDBCard, MDBContainer, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardFooter, MDBBtn } from "mdb-react-ui-kit";
import ReactPaginate from "react-paginate";
import { collection, doc, deleteDoc } from "firebase/firestore";
import {db} from "../../firebase/firebase";
import {UserAuth} from "../../context/AuthContext";

export default function ShowPosts({ postList, setPostList}) {
  const extractNameFromEmail = (email) => {
    const atIndex = email.indexOf("@");
    const name = email.substring(0, atIndex);
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const postsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const sortedPosts = postList.sort((a, b) => b.releaseDate.toDate() - a.releaseDate.toDate());
  const offset = currentPage * postsPerPage;
  const currentPosts = sortedPosts.slice(offset, offset + postsPerPage);

  const pageCount = Math.ceil(postList.length / postsPerPage);
  const postCollectionRef = collection(db, "postsCollection");
  const handleDeletePost = async (postId) => {
    try {
      await deleteDoc(doc(postCollectionRef, postId));
      console.log("Post deleted successfully");
      setPostList((prevPostList) => prevPostList.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <MDBContainer>
      {currentPosts.map((post) => (
        <MDBCard key={post.id} className="p-3 mt-3 bg-transparent">
          <MDBCardBody>
            <MDBCardTitle>{post.title}</MDBCardTitle>
            <MDBCardText style={{ whiteSpace: "pre-line" }}>{post.postText}</MDBCardText>
          </MDBCardBody>
          {post.imageUrl && <img src={post.imageUrl} alt="Post" className={'my-3 rounded mx-auto d-block img-fluid img-circle'} style={{ height: '300px'}} />}
          <MDBCardFooter className="d-flex justify-content-between">
            <div>Autor: {extractNameFromEmail(post.author.name)}</div>
            <div>Data Dodania: {post.releaseDate.toDate().toLocaleDateString()}</div>
            {UserAuth().user && <MDBBtn onClick={ () => handleDeletePost(post.id) } size="sm" color="danger">Delete</MDBBtn> }
          </MDBCardFooter>
        </MDBCard>
      ))}
      <ReactPaginate
        previousLabel={"Poprzednia"}
        nextLabel={"Następna"}
        breakLabel={"..."}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination justify-content-center mt-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link mx-2"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link mx-2"}
        activeClassName={"active"}
      />
    </MDBContainer>
  );
}
