import React, { useState } from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/flatly/bootstrap.min.css';
import Navbar from './components/MovieNavbar.js'
import SearchBar from './components/SearchBar.js'
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";


export default function App() {
  const [switchMode,setswitchMode] = useState('light');
  

  const toggleMode = ()=>{
    if(switchMode=== 'light'){
      setswitchMode('dark');
      document.body.style.backgroundColor = '#212121';
    }else{
      setswitchMode('light'); 
      document.body.style.backgroundColor = 'white';
    }
  
  }

  return (
    <>
      <div className="container">
        <Router>
           <Navbar toggleMode={toggleMode} mode={switchMode}/>
          <Routes>
            <Route path="/" element={<h1></h1>} />
            <Route path="/movies" element={<h1>Movies Page</h1>} />
            <Route path="/tvshows" element={<h1>TV Shows Page</h1>} />
            <Route path="/about" element={<h1>About Page</h1>} />
          </Routes>
        </Router>
        <SearchBar switchMode={switchMode}/>
        
      </div>
    </>
  )
}
