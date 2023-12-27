import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";

import Home from "./Pages/Home";
import Skills from './Pages/Skills';
import WebApps from './Pages/WebApps';
import Games from './Pages/Games';
import Software from './Pages/Software';
import Experience from './Pages/Experience';

function App() {
  return (
    <>
      <Router>
        <main className=" bg-gray-950 ">
          <Header />
            <div>
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="skills" element={<Skills/>}/>
                <Route path="web_apps" element={<WebApps/>}/>
                <Route path="games" element={<Games/>}/>
                <Route path="software" element={<Software/>}/>
                <Route path="experience" element={<Experience/>}/>
              </Routes>
            </div>
          
        </main>
      </Router>
    </>
  );
}

export default App;
