import React, { useState } from "react";
import { MDBCard, MDBContainer, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardFooter } from "mdb-react-ui-kit";
import ReactPaginate from "react-paginate";

export default function ShowPosts({ postList }) {
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

  return (
    <MDBContainer>
      {currentPosts.map((post) => (
        <MDBCard key={post.id} className="p-3 mt-3 bg-transparent">
          <MDBCardBody>
            <MDBCardTitle>{post.title}</MDBCardTitle>
            <MDBCardText>{post.postText}</MDBCardText>
          </MDBCardBody>
          {post.imageUrl && <img src={post.imageUrl} alt="Post Image" />}
          <MDBCardFooter className="d-flex justify-content-between">
            <div>Autor: {extractNameFromEmail(post.author.name)}</div>
            <div>Data Dodania: {post.releaseDate.toDate().toLocaleDateString()}</div>
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
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </MDBContainer>
  );
}
