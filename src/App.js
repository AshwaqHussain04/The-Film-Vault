import React, { useState } from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/flatly/bootstrap.min.css';
import Navbar from './components/MovieNavbar.js'
import SearchBar from './components/SearchBar.js'
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import About from "../src/components/aboutsection.js"


export default function App() {
  const [switchMode,setswitchMode] = useState('light');

  const Apikey = process.env.REACT_APP_API_KEY
  
  
  //switch to dark or light mode using this function
  const toggleMode = ()=>{
    if(switchMode=== 'light'){
      setswitchMode('dark');
      document.body.style.backgroundColor = '#212121';
      document.body.style.transition ='all 0.5s ease';
    }else{
      setswitchMode('light'); 
      document.body.style.backgroundColor = 'white';
      document.body.style.transition = 'all 0.5s ease'
    }
  
  }

  return (
    <>
      <div className="container">
        <Router>
           <Navbar toggleMode={toggleMode} mode={switchMode}/>
          <Routes>
             <Route path="/" element={<SearchBar Apikey={Apikey} mode={switchMode}/>}/> 
            {/* need to create seperate page of movies and tv shows */}
            <Route path="/movies" element={<h1>Movies Page</h1>} /> 
            <Route path="/tvshows" element={<h1>TV Shows Page</h1>} />
            <Route path="/about" element={<About mode={switchMode}/>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}
