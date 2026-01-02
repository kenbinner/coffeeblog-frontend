import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<ContactUs />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
