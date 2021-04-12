import {configureStore,} from "@reduxjs/toolkit";
import todoListReducer, {TODO_LIST_NAME} from "./slices/todoList";


const store = configureStore({
    preloadedState: getPreloadedState(),
    reducer: {
        [TODO_LIST_NAME]: todoListReducer
    },
})


export function getPreloadedState() {
    return undefined;
}

export default store;