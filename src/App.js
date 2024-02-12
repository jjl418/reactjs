import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from '../components/pages/home-page/Home'
// import Home from './components/pages/home-page/Home';
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
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
        </Routes>
      </Router>
  );
}

export default App;
