import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";

import Home from "./Pages/Home";
import Skills from './Pages/Skills';
import WebApps from './Pages/WebApps';
import Games from './Pages/Games';
import Software from './Pages/Software';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

function App() {
  return (
    <>
      <Router>
        <main className=" bg-gray-950 ">
          <Header />
            <div>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
            </div>
          
        </main>
      </Router>
    </>
  );
}

export default App;
