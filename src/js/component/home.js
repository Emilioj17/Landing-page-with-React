import React from "react";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<div className="row m-5">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
			<div className="">
				<Footer />
			</div>
		</div>
	);
}
