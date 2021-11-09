import { createSlice, nanoid } from "@reduxjs/toolkit";
import { saveItemsToLocaleStorage } from "../utils/localStorageUtil";

export const CATS_NAME = 'cats';


export const initialState = {
    breeds: [],
    favorites: []
};

const todoListSlice = createSlice({
    name: CATS_NAME,
    initialState,
    reducers: {
        setBreeds: (state, { payload }) => {
            state.breeds = payload;
        },
    }
});

const { actions, reducer } = todoListSlice;

export const {
    setBreeds,
} = actions;


export const getState = state => state[CATS_NAME];
export const getBreeds = state => getState(state).breeds;


export default reducer;