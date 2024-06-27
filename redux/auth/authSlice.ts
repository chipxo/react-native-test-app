import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  loggedIn: boolean;
  userName: string | undefined;
};

const initialState: InitialState = {
  loggedIn: false,
  userName: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
