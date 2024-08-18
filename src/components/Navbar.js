
import React , { useState }  from "react";
import {Link} from 'react-router-dom';
import "./NavbarStyles.css";


function Navbar () {
   const [isMobile, setIsMobile] = useState(false);  

   

   return(

      <nav>
         <>
            
            <ul id="navbar" className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
               <li><Link to="/About">About</Link></li>
               <li><Link to="Resume">Resume</Link></li>
               <li><Link to="/Works">Works</Link></li>
               <li><Link to="/Blogs">Blogs</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
           
         </>
         <div id="mobile" onClick={() => setIsMobile(!isMobile)} >
            <i className={isMobile ? "fas fa-times" : "fas fa-bars"}></i>
         </div>
      </nav>
   );
}

export default Navbar;