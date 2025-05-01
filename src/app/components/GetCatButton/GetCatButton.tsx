import fetchCatImage from "@/app/utils/fetchCatImage";
import styles from "./GetCatButton.module.scss";

interface IGetCatButtonProps {
	isDisabled: boolean;
}

export const GetCatButton = (props: IGetCatButtonProps) => {
	return (
		<div className={styles.button_container}>
			<button
				className={styles.button}
				disabled={props.isDisabled}
				onClick={() => fetchCatImage()}
			>
				Get cat
			</button>
		</div>
	);
};

export default GetCatButton;
