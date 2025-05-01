"use client";

import { useEffect, useState } from "react";
import styles from "./ControlPanel.module.scss";
import fetchCatImage from "@/app/utils/fetchCatImage";
import GetCatButton from "../GetCatButton/GetCatButton";

export const ControlPanel = () => {
	const [isEnabled, setIsEnabled] = useState<boolean>(false);
	const [isAutoRefresh, setIsAutoRefresh] = useState<boolean>(false);

	useEffect(() => {
		if (isEnabled && isAutoRefresh) {
			const intervalId = setInterval(() => {
				fetchCatImage();
			}, 5000);

			return () => clearInterval(intervalId);
		}
	}, [isAutoRefresh, isEnabled]);

	return (
		<div>
			<form className={styles.controls_form}>
				<label className={styles.label}>
					<input
						type="checkbox"
						checked={isEnabled}
						onChange={() => {
							if (isEnabled) {
								setIsEnabled(false);
								setIsAutoRefresh(false);
							} else {
								setIsEnabled(true);
							}
						}}
					/>
					<p>Enabled</p>
				</label>

				<label className={styles.label}>
					<input
						type="checkbox"
						disabled={!isEnabled}
						checked={isAutoRefresh && isEnabled}
						onChange={() => setIsAutoRefresh(!isAutoRefresh)}
					/>
					<p>Auto-refresh every 5 seconds</p>
				</label>
			</form>
			<GetCatButton isDisabled={!isEnabled} />
		</div>
	);
};

export default ControlPanel;
