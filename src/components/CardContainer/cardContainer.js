import React from "react";
import Card from "../Card/card";
import "./cardContainer.scss";

export default function CardContainer(props) {
	const { cards } = props;
	return (
		<div className="cardContainer">
			<Card cards={cards} />
		</div>
	);
}
