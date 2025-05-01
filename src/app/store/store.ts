import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catImageReducer from "./slices/catImageSlice";

export const store = configureStore({
	reducer: combineReducers({
		catImage: catImageReducer,
	}),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
