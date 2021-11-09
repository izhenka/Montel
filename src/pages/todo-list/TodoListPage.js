
import { AddTodoButton } from "./AddTodoButton";
import TodoList from "./TodoList";
import Filters from "./Filters";
import React from "react";
import { setPageTitle } from "../../utils/DOMUtils";

const TodoListPage = () => {
    setPageTitle("To-Do list")

    return (
        <div>
            <h1>To-Do list</h1>
            <Filters />
            <TodoList />
            <AddTodoButton />
        </div>
    )
}

export default TodoListPage;