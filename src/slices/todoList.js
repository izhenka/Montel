import {createSlice, nanoid} from "@reduxjs/toolkit";
import {saveItemsToLocaleStorage} from "../utils/localStorageUtil";

export const TODO_LIST_NAME = 'todolist';
export const NEW_ITEM_ID = 'NEW_ITEM_ID';
export const ALL_FILTER = undefined;
export const COMPLETED_FILTER = 'COMPLETED_FILTER';
export const NOT_COMPLETED_FILTER = 'NOT_COMPLETED_FILTER';

export const createTodoItem = (data = {}) => ({
    id: data.id,
    text: data.text,
    isCompleted: data.isCompleted,
});

export const initialState = {
    items: [],
    filter: ALL_FILTER,
    idEdit: undefined,
    textEdit: undefined,
};

const todoListSlice = createSlice({
    name: TODO_LIST_NAME,
    initialState,
    reducers: {
        setItems: (state, {payload}) => {
            state.items = payload.map(item => createTodoItem(item));
        },
        setFilter: (state, {payload}) => {
            state.filter = payload;
        },
        toggleItemIsCompleted: (state, {payload: id}) => {
            const itemToComplete = state.items.find(item => item.id === id);
            itemToComplete.isCompleted = !itemToComplete.isCompleted;
        },
        setTextEdit: (state, {payload}) => {
            state.textEdit = payload;
        },
        setIdEdit: (state, {payload: id}) => {
            state.idEdit = id;
            if (id === NEW_ITEM_ID) {
                state.textEdit = '';
                return;
            }
            const itemToEdit = state.items.find(item => item.id === id);
            state.textEdit = itemToEdit && itemToEdit.text;
        },
        saveEditedItem: (state) => {
            if (state.idEdit === NEW_ITEM_ID) {
                state.items.push(createTodoItem({
                    id: nanoid(),
                    text: state.textEdit
                }));
            } else {
                const editedItem = state.items.find(item => item.id === state.idEdit);
                editedItem.text = state.textEdit;
            }
            state.idEdit = undefined;
        },
        deleteItem: (state, {payload: id}) => {
            state.items = state.items.filter(item => item.id !== id);
        }
    }
});

const {actions, reducer} = todoListSlice;

export const {
    setItems,
    setFilter,
    setTextEdit,
    setIdEdit,
    toggleItemIsCompleted
} = actions;

export const saveEditedItem = () => async (dispatch, getState) => {
    await dispatch(actions.saveEditedItem());
    saveItemsToLocaleStorage(getTodoItems(getState()))
}

export const deleteItem = id => async (dispatch, getState) => {
    await dispatch(actions.deleteItem(id));
    saveItemsToLocaleStorage(getTodoItems(getState()))
}

export const getState = state => state[TODO_LIST_NAME];
export const getTodoItems = state => getState(state).items;
export const getFilter = state => getState(state).filter;
export const getTextEdit = state => getState(state).textEdit;
export const getIdEdit = state => getState(state).idEdit;
export const getIsInEditMode = (state, id) => getIdEdit(state) === id;
export const getVisibleTodoItems = state => {
    const filter = getFilter(state);
    const todoItems = getTodoItems(state);
    if (filter === ALL_FILTER) {
        return todoItems;
    }
    return todoItems.filter(item => filter === COMPLETED_FILTER ? item.isCompleted : !item.isCompleted)
}

export default reducer;