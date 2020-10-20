import React, { useEffect, useState } from "react";
import Button from "../Button/button";
import axios from "axios";
import "./filter.scss";

export default function Filter(props) {
	const { passCardData, queryString } = props;

	const [buttonState, setButtonState] = useState({
		year: "",
		land: "",
		launch: "",
	});

	function getCardData(selectedButton, color) {
		if (selectedButton === "launchTrue") {
			setButtonState((prevState) => ({
				...prevState,
				launch: "true",
			}));
			if (color === "#7CBA01") {
				setButtonState((prevState) => ({
					...prevState,
					launch: "",
				}));
			}
		} else if (selectedButton === "launchFalse") {
			setButtonState((prevState) => ({
				...prevState,
				launch: "false",
			}));
			if (color === "#7CBA01") {
				setButtonState((prevState) => ({
					...prevState,
					launch: "",
				}));
			}
		} else if (selectedButton === "landTrue") {
			setButtonState((prevState) => ({
				...prevState,
				land: "true",
			}));
			if (color === "#7CBA01") {
				setButtonState((prevState) => ({
					...prevState,
					land: "",
				}));
			}
		} else if (selectedButton === "landFalse") {
			setButtonState((prevState) => ({
				...prevState,
				land: "false",
			}));
			if (color === "#7CBA01") {
				setButtonState((prevState) => ({
					...prevState,
					land: "",
				}));
			}
		} else if (selectedButton >= 2006 || selectedButton <= 2020) {
			setButtonState((prevState) => ({
				...prevState,
				year: selectedButton,
			}));
			if (color === "#7CBA01") {
				setButtonState((prevState) => ({
					...prevState,
					year: "",
				}));
			}
		}
	}

	useEffect(() => {
		getCardData();
	}, [passCardData, queryString]);

	useEffect(() => {
		const getValueFetch = async () => {
			let buttonFilterParameters = {
				launch_success: buttonState ? buttonState.launch : "",
				land_success: buttonState ? buttonState.land : "",
				launch_year: buttonState ? buttonState.year : "",
			};

			const baseUrl = `https://api.spacexdata.com/v3/launches`;
			let res = await axios.get(baseUrl, {
				params: {
					limit: 100,
					...buttonFilterParameters,
				},
			});

			passCardData(res.data);

			const qs = Object.keys(buttonFilterParameters)
				.filter((item) => buttonFilterParameters[item])
				.map(
					(key) =>
						buttonFilterParameters[key] &&
						`${key}=${buttonFilterParameters[key]}`
				)
				.join("&");
			queryString.push({
				search: qs,
			});
		};

		getValueFetch();
	}, [buttonState]);

	var years = [
		2006,
		2007,
		2008,
		2009,
		2010,
		2011,
		2012,
		2013,
		2014,
		2015,
		2016,
		2017,
		2018,
		2019,
		2020,
	];

	return (
		<>
			<div id="filter" className="filterContainer">
				<h3>Filters</h3>
				<div className="filterHeading">
					<span>Launch Year</span>
					<div className="filterButton">
						{years.map((year) => (
							<Button
								key={year}
								buttonText={year}
								buttonValue={year}
								filterFunc={getCardData}
							/>
						))}
					</div>
					<span>Successful Launch</span>
					<div className="filterButton">
						<Button
							buttonText={"True"}
							buttonValue={"launchTrue"}
							filterFunc={getCardData}
						/>
						<Button
							buttonText={"False"}
							buttonValue={"launchFalse"}
							filterFunc={getCardData}
						/>
					</div>
					<span>Successful Landing</span>
					<div className="filterButton">
						<Button
							buttonText={"True"}
							buttonValue={"landTrue"}
							filterFunc={getCardData}
						/>
						<Button
							buttonText={"False"}
							buttonValue={"landFalse"}
							filterFunc={getCardData}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
