import React from "react";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Post from "../components/Posting/Post";

export default function CreatePost() {
	return (
		<div>
			<NavBar />
				<Post />
			<Footer />
		</div>
	);
}