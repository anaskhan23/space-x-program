import React, { useState } from "react";
import "./button.scss";

const Button = (props) => {
	const { buttonValue, buttonText, filterFunc } = props;

	const [color, setColor] = useState("#c5e09b");

	const handleClick = (e) => {
		filterFunc(e.target.value);

		setColor("#7CBA01");
	};

	return (
		<button
			type="button"
			// onChange={handleChange}
			title={buttonText}
			onClick={handleClick}
			style={{ background: color }}
			value={buttonValue}
			// checked={buttonState.year}
			// name={buttonState.year}
		>
			{buttonText}
		</button>
	);
};
export default Button;
