import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar';
import Home from './pages/Home';
import Java from './pages/Java';
import Javascript from './pages/Javascript';
import Python from './pages/Python';
import Golang from './pages/Golang';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        <Routes>
          <Route path = '/home' exact element={<Home/>}/>
          <Route path = '/java' element={<Java/>}/>
          <Route path = '/javascript' element={<Javascript/>}/>
          <Route path = '/golang' element={<Golang/>}/>
          <Route path = '/Python' element={<Python/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;