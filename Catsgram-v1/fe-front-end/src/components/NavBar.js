import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
     
        <nav>
          <div>    <NavLink to="/catscontainer">Home</NavLink>  </div>

          <div>    <NavLink to="/favcontainer">Favorites</NavLink> </div>
          <div>    <NavLink to="/newcat">New Cat</NavLink> </div>
          <div>    <NavLink to="/test">Update Cat</NavLink></div>
        </nav>  
   
    );
  };

export default NavBar;
