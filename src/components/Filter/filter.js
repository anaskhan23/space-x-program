import React, { useEffect, useState } from "react";
// import useParams from "react-router-dom";
import Button from "../Button/button";
import axios from "axios";
import "./filter.scss";

export default function Filter(props) {
	const [buttonState, setButtonState] = useState({
		year: "",
		land: "",
		launch: "",
	});
	const { passCardData } = props;

	function getCardData(selectedButton) {
		if (selectedButton === "launchTrue") {
			setButtonState((prevState) => ({
				...prevState,
				launch: "true",
			}));
		} else if (selectedButton === "launchFalse") {
			setButtonState((prevState) => ({
				...prevState,
				launch: "false",
			}));
		} else if (selectedButton === "landTrue") {
			setButtonState((prevState) => ({
				...prevState,
				land: "true",
			}));
		} else if (selectedButton === "landFalse") {
			setButtonState((prevState) => ({
				...prevState,
				land: "false",
			}));
		} else if (selectedButton >= 2006 || selectedButton <= 2020) {
			setButtonState((prevState) => ({
				...prevState,
				year: selectedButton,
			}));
		}
	}
	useEffect(() => {
		getCardData();
	}, []);

	useEffect(() => {
		const getValueFetch = async () => {
			let buttonFilterParameters = {
				launch_success: buttonState ? buttonState.launch : "",
				land_success: buttonState ? buttonState.land : "",
				launch_year: buttonState ? buttonState.year : "",
			};
			let res;
			const baseUrl = `https://api.spacexdata.com/v3/launches`;
			res = await axios.get(baseUrl, {
				params: {
					limit: 100,
					...buttonFilterParameters,
				},
			});
			passCardData(res.data, buttonFilterParameters);
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
			<div className="filterContainer">
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