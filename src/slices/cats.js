import { createSlice } from "@reduxjs/toolkit";

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
        toggleFavorite: (state, { payload: breedId }) => {
            const isFavorite = state.favorites.includes(breedId);
            if (isFavorite) {
                state.favorites = state.favorites.filter(id => id !== breedId);
            } else {
                state.favorites.push(breedId);
            }
        },
        removeBreed: (state, { payload: breedId }) => {
            state.breeds = state.breeds.filter(breed => breed.id !== breedId);
        },
    }
});

const { actions, reducer } = todoListSlice;

export const {
    toggleFavorite,
    setBreeds,
    removeBreed,
} = actions;


export const getState = state => state[CATS_NAME];
export const getBreeds = state => getState(state).breeds;
export const getFavoriteBreeds = state => getState(state).favorites;
export const getIsFavoriteBreedById = (state, breedId) => getFavoriteBreeds(state).includes(breedId);


export default reducer;