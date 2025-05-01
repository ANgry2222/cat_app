"use client";

import ControlPanel from "./components/ControlPanel/ControlPanel";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import styles from "./page.module.scss";
import { Provider } from "react-redux";
import store from "./store/store";

export default function Home() {
	return (
		<div className={styles.page_container}>
			<Provider store={store}>
				<ControlPanel />
				<ImageContainer />
			</Provider>
		</div>
	);
}
