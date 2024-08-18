import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Works from './components/Works';
import Navbar from './components/Navbar';

import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';



function App(){
  const [showPages, setShowPages] = useState(false);

  const togglePages = () => {
    setShowPages(!showPages);
  };

  return(
    <Router>
      <>
        <Navbar />

         <button onClick={togglePages} className="toggle-button">
          <FontAwesomeIcon icon={showPages ? faTimes : faBars} />        
        </button>

        {showPages && (
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        )}
      </>
    </Router>
  );
}

export default App;
       


