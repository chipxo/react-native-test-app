import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./auth/authSlice";
import langReducer from "./lan/languageSlice";
import userSlice from "./user/userSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["lang", "auth", "user"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  lang: langReducer,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof rootReducer>;
