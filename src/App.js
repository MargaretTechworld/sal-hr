import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OpenVacancies from './components/OpenVacancies';
import Login from './components/Login';
import JobDetails from './components/JobDetails';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/openVacancies" element={<OpenVacancies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobDetails" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;
