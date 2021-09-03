import React from "react";
import styles from "../styles/Home.module.css";

const Switch = ({ isMI, handleToggle }) => {
	return (
		<label style={{ background: isMI }} className={styles.switch}>
			<input
				checked={isMI}
				onChange={handleToggle}
				className={styles.switch_checkbox}
				type="checkbox"
			/>
			<div className={styles.switch_button} />
			<div className={styles.switch_labels}>
				<span>mi.</span>
				<span>km.</span>
			</div>
		</label>
	);
};

export default Switch;
