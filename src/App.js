import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


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
          <Route path ='/' exact />
        </Routes>
      </Router>
  );
}

export default App;
