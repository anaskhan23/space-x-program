import React, { useState, useRef } from "react";
import "./button.scss";

const Button = (props) => {
	const { buttonValue, buttonText, filterFunc } = props;

	const [color, setColor] = useState("#c5e09b");

	const textBtn = useRef();

	const handleClick = (e) => {
		// textBtn.current.attributes.lastValue = e.target.value;

		setColor(color === "#c5e09b" ? "#7CBA01" : "#c5e09b");

		const buttons = textBtn.current.parentElement.children;

		for (let i = 0; i < buttons.length; i++) {
			//here you set all buttons to default color
			buttons[i].style.backgroundColor = "#c5e09b";
		}
		textBtn.current.style.backgroundColor = "#7CBA01";
		filterFunc(e.target.value, color);
	};

	return (
		<button
			id="filter-btn"
			ref={textBtn}
			type="button"
			title={buttonText}
			onClick={handleClick}
			style={{ background: color }}
			value={buttonValue}
		>
			{buttonText}
		</button>
	);
};
export default Button;
