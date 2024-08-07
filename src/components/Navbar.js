
import React from "react";
import {Link} from 'react-router-dom';
import "./NavbarStyles.css";


function Navbar(){
   return(

      <nav>
         <div>
            <ul id="navbar">
               <li><Link to="/About">About</Link></li>
               <li><Link to="Resume">Resume</Link></li>
               <li><Link to="/Works">Works</Link></li>
               <li><Link to="/Blogs">Blogs</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </div>
      </nav>
   );
}

export default Navbar;