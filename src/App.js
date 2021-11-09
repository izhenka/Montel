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

function App() {
    return (
        <Router>
            <div className="App">
                <main>
                    <div>
                        <Link to="/">Todos</Link>
                        <Link to="/cats">Cats</Link>
                        <Link to="/cat-picture">CatPicture</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<TodoListPage />} />
                        <Route path="/cats" element={<CatsPage />} />
                        <Route path="/cat-picture" element={<CatPicturePage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
