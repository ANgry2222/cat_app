import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CatImageSlice {
	link: string;
}

const imageSliceInitialState: CatImageSlice = {
	link: "",
};

export const CatImageSlice = createSlice({
	name: "catImage",
	initialState: imageSliceInitialState,
	reducers: {
		setLink: (state, action: PayloadAction<string>) => {
			state.link = action.payload;
		},
	},
});

export const { setLink } = CatImageSlice.actions;
export const getLink = (state: RootState) => state.catImage.link;
export default CatImageSlice.reducer;
