import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type User = {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  token: string;
  username: string;
};

type InitialState = {
  name: string | undefined;
  email: string | undefined;
};

const initialState: InitialState = {
  name: undefined,
  email: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.username;
      state.email = action.payload.email;
    },
    deleteUser: (state) => {
      state.name = undefined;
      state.email = undefined;
    },
  },
});

export const { createUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
