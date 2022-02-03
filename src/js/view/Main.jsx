import React, { useState, useEffect } from "react";
import "../../styles/Main.css";
import Card from "../component/Card.jsx";
//Install: npm install react-bootstrap bootstrap@5.1.3

const Main = () => {
	const [seconds, setSeconds] = useState(1);

	useEffect(() => {
		//Se ejecuta la función cada segundo y se suma uno a seconds
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
		//Units transform seg. -> miliseg.
		const mSecondStop = 9999 * 1000;
		//Se muestra un "alert" a los 9999 segundos y se para de ejecutar la función
		setTimeout(() => {
			clearInterval(interval);
			alert(
				"Han pasado 9999 segundos - se ha llegado al límite del contador."
			);
		}, mSecondStop);
	}, []);

	const seconds1000 = Math.floor(seconds / 1000);
	const rSeconds1000 = seconds % 1000;
	const seconds100 = Math.floor(rSeconds1000 / 100);
	const rSeconds100 = rSeconds1000 % 100;
	const seconds10 = String(Math.floor(rSeconds100 / 10));
	const rSeconds10 = rSeconds100 % 10;

	return (
		<div class="container-fluid bg-light align-items-center mt-5 ">
			<div className="row text-center">
				<div class="col-2" />
				<Card number={seconds1000} />
				<Card number={seconds100} />
				<Card number={seconds10} />
				<Card number={rSeconds10} />
			</div>
		</div>
	);
};

export default Main;
