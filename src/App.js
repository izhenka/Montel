import './App.css';
import CatsPage from "./pages/cat-breeds/CatsPage";
import TodoListPage from "./pages/todo-list/TodoListPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import React from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <main>
                    <Routes>
                        <Route path="/" element={<TodoListPage />} />
                        <Route path="/cats" element={<CatsPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
