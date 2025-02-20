import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cache: null,
};

export const dataSlice = createSlice({
	name: "multi-ten",
	initialState,
	reducers: {
		setCache: (state, action) => {
			state.cache = action.payload;
		},
	},
});

export const { setCache } = dataSlice.actions;
export default dataSlice.reducer;
