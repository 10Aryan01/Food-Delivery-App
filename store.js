import { configureStore } from "@reduxjs/toolkit";
import CartSlice  from "./Slices/carSlice";
import  restaurantSlice  from "./Slices/RestaurentSlice";

export default configureStore({
  reducer: {
    cart:CartSlice,
    restaurant:restaurantSlice,
  },
});
