import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {

  return (
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/haqqimizda" element={<About />}/>
        <Route path="/elaqe" element={<Contact />}/>
      </Routes>

  )
}

export default App