import React from "react";

const Card = (props) => {
	return (
		<div className="card col-2">
			<div className="card-body">
				<h5 className="card-title">{props.number}</h5>
			</div>
		</div>
	);
};

export default Card;
