import './App.css';
import {setPageTitle} from "./utils/DOMUtils";
import {AddTodoButton} from "./components/AddTodoButton";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

function App() {
    setPageTitle("To-Do list")
    return (
        <div className="App">
            <main>
                <h1>To-Do list</h1>
                <Filters/>
                <TodoList/>
                <AddTodoButton/>
            </main>
        </div>
    );
}

export default App;
