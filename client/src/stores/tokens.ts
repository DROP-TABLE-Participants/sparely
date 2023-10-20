import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITokenState {
  token: string | null;
}

const tokenInitialState: ITokenState = {
  token: null,
};

const cartSlice = createSlice({
  name: "token",
  initialState: tokenInitialState,
  reducers: {
    setStoredToken: (
      state: ITokenState,
      action: PayloadAction<string | null>
    ): void => {
      state.token = action.payload;
    },
  },
});

const tokenReducer = cartSlice.reducer;

export const { setStoredToken } = cartSlice.actions;

export default tokenReducer;
