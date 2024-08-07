import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Works from './components/Works';
import Navbar from './components/Navbar';
import './App.css';
//import Navbar from './components/Navbar';


function App(){
  return(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
       


