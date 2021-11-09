import { configureStore, } from "@reduxjs/toolkit";
import todoListReducer, { initialState as todoListInitialState, TODO_LIST_NAME } from "./slices/todoList";
import catsReducer, { CATS_NAME } from "./slices/cats";
import { getItemsFromLocaleStorage } from "./utils/localStorageUtil";


const store = configureStore({
    preloadedState: getPreloadedState(),
    reducer: {
        [TODO_LIST_NAME]: todoListReducer,
        [CATS_NAME]: catsReducer,
    },
})


export function getPreloadedState() {
    return {
        [TODO_LIST_NAME]: {
            ...todoListInitialState,
            items: getItemsFromLocaleStorage()
        }
    };
}

export default store;