import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
	calc_total_seconds,
	make_splits,
	calc_pace,
} from "../functions/time_functions";
import styles from "../styles/Home.module.css";
import Switch from "./switch.js";

export default function Calculator() {
	const [useM, setUnit] = useState(true);
	const [splits, setSplits] = useState([]);
	const [pace, setPace] = useState("");
	const { register, handleSubmit } = useForm();

	const onSubmitForm = (data) => {
		const goal = parseFloat(data.goal),
			hr = parseInt(data.hr),
			min = parseInt(data.min),
			sec = parseInt(data.sec),
			split = parseFloat(data.split);

		/* Prevent a calculation where the split distance is less than the goal distance*/
		if (split > goal) {
			alert("The split distance must be less than the distance goal.");
			return;
		}

		const totalSec = calc_total_seconds(hr, min, sec);
		setSplits(make_splits(totalSec, goal, split, useM));
		setPace(calc_pace(goal, totalSec, useM));
	};

	const renderSplit = (split, index) => {
		return (
			<tr key={index}>
				<td>{split[0]}</td>
				<td>{split[1]}</td>
				<td>{split[2]}</td>
				<td style={{ color: "#1DBF40" }}>{split[3]}</td>
			</tr>
		);
	};

	return (
		<div className={styles.calc_background}>
			<Switch isOn={useM} handleToggle={() => setUnit(!useM)} />

			<div className={styles.flex_container}>
				<div className={styles.flex_item}>
					<form onSubmit={handleSubmit(onSubmitForm)}>
						<label>Distance Goal (in {useM ? "mi." : "km."})</label>
						<div>
							<input
								type="number"
								min="0.1"
								step="0.01"
								{...register("goal")}
								required
							/>
						</div>

						<label>Time Goal (hh:mm:ss)</label>
						<div className="time_group">
							<input
								id="hr"
								type="number"
								className={styles.time_form}
								min="0"
								{...register("hr")}
								required
							/>
							<input
								id="mins"
								type="number"
								className={styles.time_form}
								style={{ marginLeft: "-1px" }}
								min="0"
								max="59"
								{...register("min")}
								required
							/>
							<input
								id="sec"
								type="number"
								className={styles.time_form}
								style={{ marginLeft: "-2px" }}
								min="0"
								max="59"
								{...register("sec")}
								required
							/>
						</div>

						<label>Split Distance (in {useM ? "mi." : "km."})</label>
						<input
							id="split"
							type="number"
							min="0.1"
							step="0.01"
							{...register("split")}
							required
						/>
						<div style={{ textAlign: "center" }}>
							<input type="submit" value="Calculate" className={styles.btn} />
						</div>
					</form>
				</div>

				<div className={styles.flex_item}>
					<table>
						<thead>
							<tr>
								<th>Split</th>
								<th>Distance</th>
								<th>Time</th>
								<th>Change</th>
							</tr>
						</thead>
						<tbody>{splits.map(renderSplit)}</tbody>
					</table>

					<p>{pace}</p>
				</div>
			</div>
		</div>
	);
}
