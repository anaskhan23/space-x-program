import React, { useState } from "react";
import "./App.scss";
import CardContainer from "./components/CardContainer/cardContainer";
import Filter from "./components/Filter/filter";
import Header from "./components/Header/header";

function App(props) {
	const [cards, setCards] = useState([]);

	const passCardData = (arg, urlParam) => {
		setCards(arg);
	};

	return (
		<>
			<div className="App">
				<Header />
				<main>
					<div className="leftContainer">
						<Filter passCardData={passCardData} />
					</div>
					<div className="rightContainer">
						<CardContainer cards={cards} />
					</div>
				</main>
				<h4 style={{ textAlign: "center", marginTop: "0" }}>
					Developed By: Anas Khan
				</h4>
			</div>
		</>
	);
}

export default App;
