import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import './app.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<Main />} />
                <Route path="/publication" element={<Main />} />
                <Route path="/projects" element={<Main />} />
                <Route path="/education" element={<Main />} />
                <Route path="/work" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;
