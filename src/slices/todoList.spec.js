import {
    ALL_FILTER,
    COMPLETED_FILTER,
    createTodoItem,
    getVisibleTodoItems,
    NOT_COMPLETED_FILTER,
    TODO_LIST_NAME
} from "./todoList";

const createState = ({items, filter}) => ({
    [TODO_LIST_NAME]: {
        items,
        filter
    }
})

describe('getVisibleTodoItems', () => {
    const items = [
        createTodoItem({id: 1, text: "item1", isCompleted: false}),
        createTodoItem({id: 2, text: "item2", isCompleted: true}),
        createTodoItem({id: 3, text: "item3", isCompleted: true}),
        createTodoItem({id: 4, text: "item4", isCompleted: false})
    ]

    it('should return all items when filter is all', () => {
        const filter = ALL_FILTER;
        const state = createState({items, filter});
        const expected = [
            createTodoItem({id: 1, text: "item1", isCompleted: false}),
            createTodoItem({id: 2, text: "item2", isCompleted: true}),
            createTodoItem({id: 3, text: "item3", isCompleted: true}),
            createTodoItem({id: 4, text: "item4", isCompleted: false})
        ]
        expect(getVisibleTodoItems(state)).toEqual(expected);
    })
    it('should return just completed items when filter is completed', () => {
        const filter = COMPLETED_FILTER;
        const state = createState({items, filter});
        const expected = [
            createTodoItem({id: 2, text: "item2", isCompleted: true}),
            createTodoItem({id: 3, text: "item3", isCompleted: true}),
        ]
        expect(getVisibleTodoItems(state)).toEqual(expected);
    })
    it('should return just not completed items when filter is not completed', () => {
        const filter = NOT_COMPLETED_FILTER;
        const state = createState({items, filter});
        const expected = [
            createTodoItem({id: 1, text: "item1", isCompleted: false}),
            createTodoItem({id: 4, text: "item4", isCompleted: false})
        ]
        expect(getVisibleTodoItems(state)).toEqual(expected);
    })


})