import React,{ useState, useEffect } from 'react'
import './styles/App.scss'
import Home from './pages/Home.jsx'
import Whitepaper from './pages/Whitepaper.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/Whitepaper" element={<Whitepaper />} ></Route>
      </Routes>
    </Router>

    </>
  )
}

export default App
