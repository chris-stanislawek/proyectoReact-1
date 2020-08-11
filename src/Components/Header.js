import React from "react";
import '../assets/styles/Components/Header.scss'

const Header = () => {
  return (
      <header className="header"> 
   
        <div className="nav-left-section"> 
            <p> LOGO__APP </p>
        </div>
        
    <ul className="nav-right-section">
        <li> 
            <a href="/login"> HOME </a>
        </li>
        
        <li> 
         <a href="/register"> FAQ </a>
       </li>

       <li> 
         <a href="/register"> BLOG </a>
       </li>

        <li> 
       <button className="nav-right-section__button"> POST A JOB </button>
       </li>
      
    </ul>
  
</header>

  );

};

export default Header;
