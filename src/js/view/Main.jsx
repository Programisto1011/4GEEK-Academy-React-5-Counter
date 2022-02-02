import React, { useState, useEffect } from "react";
import Card from "../component/Card.jsx";

//create your first component
const Main = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div>
			<div className="row">
				<Card number={seconds} />
				<Card number="1" />
				<Card number="1" />
				<Card number="1" />
				<Card number="1" />
				<Card number="1" />
			</div>
		</div>
	);
};

export default Main;
