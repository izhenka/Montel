import './App.css';
import CatsPage from "./pages/cat-breeds/CatsPage";
import TodoListPage from "./pages/todo-list/TodoListPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import React from 'react';
import CatPicturePage from './pages/cat-picture/CatPicturePage';
import axios from 'axios';

function App() {

    axios.defaults.headers.common = {
        "X-API-Key": "b44f38ab-ca02-40f5-b146-3cccefe2e942",
    };

    return (
        <Router>
            <div className="App">
                <main>
                    <div>
                        <Link to="/todos">Todos</Link>
                        <Link to="/cats">Cats</Link>
                        <Link to="/cat-picture">Cat Picture</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<CatPicturePage />} />
                        <Route path="/todos" element={<TodoListPage />} />
                        <Route path="/cats" element={<CatsPage />} />
                        <Route path="/cat-picture" element={<CatPicturePage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
