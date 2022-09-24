import React from 'react';

import './App.css';
import Header from './shared/Header/Header';
import Home from './pages/Home/Home';
import { ParallaxProvider } from 'react-scroll-parallax';
import Experience from './pages/Experience/Experience'; 
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Photography from './pages/Photography/Photography';
function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography/>}/>
           
          <Route path="/resume">
          </Route>
        </Routes>
       
      </div>
    </ParallaxProvider>
  );
}

export default App;
