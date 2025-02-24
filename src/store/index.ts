import { configureStore } from "@reduxjs/toolkit";
import { itemReducers, moveItem, returnItem, setItemTimeout } from "./slices/itemSlice";

const store = configureStore({
    reducer: {
        items: itemReducers,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
    moveItem, returnItem, setItemTimeout
};

export default store;
