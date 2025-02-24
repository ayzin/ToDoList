import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VegeFruitList } from "../../const/VegeFruitList";

interface Item {
    type: string;
    name: string;
}

interface ItemsState {
    unassigned: Item[];
    fruits: Item[];
    vegetables: Item[];
    timeouts: Record<string, number>; // Track active timeouts
}


const initialState: ItemsState = {
    unassigned: VegeFruitList,
    fruits: [],
    vegetables: [],
    timeouts: {}, 
};

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        moveItem: (state, action: PayloadAction<Item>) => {
            state.unassigned = state.unassigned.filter((i) => i.name !== action.payload.name);
            if (action.payload.type === "Fruit") {
                state.fruits.push(action.payload);
            } else {
                state.vegetables.push(action.payload);
            }
        },
        returnItem: (state, action: PayloadAction<Item>) => {
            // Clear timeout if it exists
            if (state.timeouts[action.payload.name]) {
                clearTimeout(state.timeouts[action.payload.name]);
                delete state.timeouts[action.payload.name];
            }
            
            state.fruits = state.fruits.filter((i) => i.name !== action.payload.name);
            state.vegetables = state.vegetables.filter((i) => i.name !== action.payload.name);
            state.unassigned.push(action.payload);
        },
        setItemTimeout: (state, action: PayloadAction<{ item: Item; timeoutId: number }>) => {
            state.timeouts[action.payload.item.name] = action.payload.timeoutId;
        }
    },
});

export const { moveItem, returnItem, setItemTimeout } = itemsSlice.actions;
export const itemReducers = itemsSlice.reducer;