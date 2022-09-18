import { createSlice } from "@reduxjs/toolkit";
import reducers from './authReducers';

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {
			email: "",
			id: "",
		}
	},
	reducers: reducers,
});

export const { updateEmail, updateWholeUser, resetUser } = authSlice.actions;

export default authSlice.reducer;