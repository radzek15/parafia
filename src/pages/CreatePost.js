import React from "react";

import {UserAuth} from "../context/AuthContext";
import Footer from "../components/Footer/Footer";
import Post from "../components/Posting/Post";
import AdminNavBar from "../components/NavBar/AdminNavBar";

export default function CreatePost() {
	return (
		<div>
			<AdminNavBar />
				<Post isAuth={UserAuth().user}/>
			<Footer />
		</div>
	);
}