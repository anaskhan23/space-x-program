import React, { useState } from "react";
import "./App.scss";
import CardContainer from "./components/CardContainer/cardContainer";
import Filter from "./components/Filter/filter";
import Header from "./components/Header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function Main(props) {
	const [cards, setCards] = useState([]);

	const passCardData = (cardData) => {
		setCards(cardData);
	};

	return (
		<>
			<Header />
			<main>
				<div className="leftContainer">
					<Filter
						passCardData={passCardData}
						queryString={props.history}
					/>
				</div>
				<div className="rightContainer">
					<CardContainer cards={cards} />
				</div>
			</main>
			<h4 style={{ textAlign: "center", marginTop: "0" }}>
				Developed By: Anas Khan
			</h4>
		</>
	);
}

function App() {
	return (
		<>
			<div className="App">
				<Router>
					<Switch>
						<Route path="/" component={(props) => Main(props)} />
					</Switch>
				</Router>
			</div>
		</>
	);
}

export default App;
