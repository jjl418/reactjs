import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import Art from './components/pages/art/Art';
import Arcade from './components/pages/arcade/Arcade';
import AboutMe from './components/pages/aboutme/AboutMe';
import CreamistryGame from './components/pages/arcade/CreamistryGame';
import './fonts/MS_Sans_Serif_Bold.ttf';
function App() {
  return (
      // <header className="App-header">
        
      //   <p>
      //     HELLO
      //   </p>
      // </header>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path ='/' exact component={Home}/> */}
          <Route path = '/' element={<Home/>} />
          <Route path = '/projects' element = {<Projects/>} />
          <Route path = '/art' element = {<Art/>} />
          <Route path = '/arcade' element = {<Arcade/>} />
          <Route path = '/about-me' element = {<AboutMe/>} />
          <Route path = '/creamistry' element = {<CreamistryGame/>} />
        </Routes>
      </Router>
  );
}

export default App;
