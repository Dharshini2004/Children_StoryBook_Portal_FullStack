// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/cart/CartSlice';
import userReducer from "./feature/user/UserSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
