import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import cartReducer from "../features/cartSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
  },
});
