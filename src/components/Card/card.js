import React from "react";
import "./card.scss";

export default function Card(props) {
	const { cards } = props;
	return (
		<>
			{cards.map((card) => (
				<div className="card" key={card.flight_number}>
					<img
						src={card.links.mission_patch_small}
						alt="Avatar"
						className="card-img-top"
						title={card.mission_name}
					/>
					<div className="container">
						<h5>{card.mission_name}</h5>
						<table>
							<tbody>
								<tr>
									<th>Mission Id</th>
									<td>:</td>
									{/* <td>{card.mission_id.join()}</td> */}
									<td>
										{card.mission_id.map((list) => (
											<li key={list}>{list}</li>
										))}
									</td>
								</tr>
								<tr>
									<th>Launch Year</th>
									<td>:</td>
									<td>{card.launch_year}</td>
								</tr>
								<tr>
									<th>Successful Launch</th>
									<td>:</td>
									<td>{card.launch_year}</td>
								</tr>
								<tr>
									<th>Successful Landing</th>
									<td>:</td>
									<td>
										{card.rocket.first_stage.cores[0]
											.land_success
											? card.rocket.first_stage.cores[0].land_success
													.toString()
													.toUpperCase()
											: card.rocket.first_stage.cores[0]
													.land_success}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			))}
		</>
	);
}