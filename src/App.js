import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar';
import Home from './pages/Home';
import Java from './pages/Java';
import Javascript from './pages/Javascript';
import Python from './pages/Python';
import Golang from './pages/Golang';
import Closure from './pages/Closure';
import Erlang from './pages/Erlang';
import Ruby from './pages/Ruby';
import C++ from './pages/C++';
import C from './pages/C';
import C# from './pages/C#';
import HTML from './pages/HTML';
import PHP from './pages/PHP';
import Scala from './pages/Scala';
          

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
          <Route path = '/Closure' element={<Closure/>}/>
          <Route path = '/Erlang' element={<Erlang/>}/>
          <Route path = '/Ruby' element={<Ruby/>}/>
          <Route path = '/C' element={<C/>}/>
          <Route path = '/C++' element={<C++/>}/>
          <Route path = '/C#' element={<C#/>}/>
          <Route path = '/HTML' element={<HTML/>}/>
          <Route path = '/PHP' element={<PHP/>}/>
          <Route path = '/Scala' element={<Scala/>}/>
          
          
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
