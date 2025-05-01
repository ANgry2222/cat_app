import { setLink } from "../store/slices/catImageSlice";
import { store } from "../store/store";

export const fetchCatImage = () => {
	fetch("https://api.thecatapi.com/v1/images/search")
		.then((response) => response.json())
		.then((data) => {
			store.dispatch(setLink(data[0].url));
		});
};

export default fetchCatImage;
