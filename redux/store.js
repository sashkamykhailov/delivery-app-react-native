import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./slices/BasketSlice";
import RestaurantSlice from "./slices/RestaurantSlice";

export const store = configureStore({
    reducer: {
        basket: BasketSlice,
        restaurant: RestaurantSlice,
    }
})