import React, { useState, useEffect } from "react";
import Card from "../component/Card.jsx";

//create your first component
const Main = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		//Se ejecuta la función cada segundo y se suma uno a seconds
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
		//Se muestra un "alert" a los 5 segundos y se para de ejecutar la función
		setTimeout(() => {
			clearInterval(interval);
			alert("stop");
		}, 22000);
	}, []);

	const seconds1 = String(seconds % 10);
	const seconds10 = String(Math.floor(seconds / 10));
	const seconds100 = Math.floor(seconds / 100);
	const seconds1000 = Math.floor(seconds / 1000);

	return (
		<div>
			<div className="row">
				<Card number={seconds1000} />
				<Card number={seconds100} />
				<Card number={seconds10} />
				<Card number={seconds1} />
			</div>
		</div>
	);
};

export default Main;
