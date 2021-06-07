import React from "react";

export let Cards = function() {
	return (
		<div className="card col-xs-12 col-md-6 col-lg-3 pt-3">
			<img
				className="card-img-top"
				src="https://picsum.photos/500/325"
				alt="Card image cap"></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};
