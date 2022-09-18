const reducers = {
	updateEmail: (state, action) => {
		state.user = { ...state.user, email: action.payload.email };
	},
	updateWholeUser: (state, action) => {
		const id = state.user.id + 1;
		state.user = { ...action.payload };
	},
	resetUser: (state) => {
		state.user = {
			email: "",
			id: '',
		}
	}
}

export default reducers;