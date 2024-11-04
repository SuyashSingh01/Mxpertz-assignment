import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import CardList from './component/ScienceFictionList.jsx';
import StoryDetail from './component/StoryDetail.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("True");
  return (
    <div className="font-bold w-screen min-h-screen flex flex-col">

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/story/:id" element={<StoryDetail />} />
      </Routes>
    </div>
  );
}
export default App;
