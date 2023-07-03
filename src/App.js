import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ProfileListing from './ProfileListing';
import ProfileDetail from './ProfileDetail';
import "./App.css"
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<ProfileListing />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
