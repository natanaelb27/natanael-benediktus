import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import mobileMenuReducer from "./slices/mobileMenuSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
  mobileMenu: mobileMenuReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
