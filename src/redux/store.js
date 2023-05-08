import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/slice/cartSlice";
import modalReducer from "./features/slice/modalSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		modal: modalReducer,
	},
});
