//import logo from './logo.svg';
import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from './components/Login'
import { Marvel } from './components/Marvel'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>   
          <Route path='/:id' element={<Marvel/>}/>       
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
