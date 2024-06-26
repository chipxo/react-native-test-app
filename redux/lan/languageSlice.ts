import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  lan: "en" | "ar";
};

const initialState: InitialState = {
  lan: "en",
};

const languageSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"en" | "ar">) => {
      state.lan = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
