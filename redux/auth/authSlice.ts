import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  loggedIn: boolean;
  userName: string | undefined;
  // refreshToken: string | undefined;
};

const initialState: InitialState = {
  loggedIn: false,
  userName: undefined,
  // refreshToken: undefined,
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
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { logIn, logOut, setUserName } = authSlice.actions;

export default authSlice.reducer;
