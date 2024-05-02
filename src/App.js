import './App.css';
import React from 'react';
import { HashRouterrRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import Art from './components/pages/art/Art';
import Arcade from './components/pages/arcade/Arcade';
import AboutMe from './components/pages/aboutme/AboutMe';
import CreamistryGame from './components/pages/arcade/CreamistryGame';
import MonsterGame from './components/pages/arcade/MonsterGame';
import './fonts/MS_Sans_Serif_Bold.ttf';
function App() {
  return (
      // <header className="App-header">
        
      //   <p>
      //     HELLO
      //   </p>
      // </header>
      
      <Router>
        {/* <TabReload /> */}
        <Navbar />
        <Routes>
          {/* <Route path ='/' exact component={Home}/> */}
          <Route path = '/reactjs' element={<Home/>} />
          <Route path = 'reactjs/projects' element = {<Projects/>} />
          <Route path = 'reactjs/art' element = {<Art/>} />
          <Route path = 'reactjs/arcade' element = {<Arcade/>} />
          <Route path = 'reactjs/about-me' element = {<AboutMe/>} />
          <Route path = 'reactjs/creamistry' element = {<CreamistryGame/>} />
          <Route path = 'reactjs/monster-bartender' element = {<MonsterGame/>} />
        </Routes>
      </Router>
  );
}

export default App;
