import React from "react";
import './HomeNavBar.css'

export default function HomeNavBar() {
    return (
			<div className="custom-navbar">
				<nav>
					<ul className="nav-list">
						<li><a href="#history" className="text-success mx-3">Historia</a></li>
						<li><a href="#patrons" className="text-success mx-3">Patroni</a></li>
						<li><a href="#priests" className="text-success mx-3">Kapłani</a></li>
					</ul>
				</nav>
			</div>
    );
}
