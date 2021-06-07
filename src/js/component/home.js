import React from "react";
import { Navbar } from "./navbar.js";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";
import { Jumbotron } from "./jumbotron.js";

//create your first component
export function Home() {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div>
				<Jumbotron />
			</div>
			<div className="row m-5">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
			<div className="">
				<Footer />
			</div>
		</>
	);
}
