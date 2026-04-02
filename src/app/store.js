import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import cartReducer from "../features/cartSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
  },
});

export default store;
