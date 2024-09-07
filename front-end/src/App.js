import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard'; 
import './shared.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} /> {/* Define Dashboard route */}
                    <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root to login */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
