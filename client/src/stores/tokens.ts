import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IComponent } from "@app/types/component";

export interface ComponentState {
	components: IComponent[];
}

const componentInitialState: ComponentState = {
	components: [],
};

const cartSlice = createSlice({
	name: "component",
	initialState: componentInitialState,
	reducers: {
		setStoredComponents: (state: ComponentState, action: PayloadAction<IComponent[]>): void => {
			state.components = action.payload;
		},
	},
});

const componentReducer = cartSlice.reducer;

export const { setStoredComponents } = cartSlice.actions;

export default componentReducer;