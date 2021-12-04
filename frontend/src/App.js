import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import HeroDetails from "./components/HeroDetails";
import Home from "./layout/Home/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hero/:id" element={<HeroDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
