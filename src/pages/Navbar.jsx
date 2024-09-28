// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="navbar bg-blue-200 flex justify-center font-mono text-fuchsia-950 text-2xl"> 
      <div> 
        <h1 className="text-4xl"> 
        <Link to="/" className="btn btn-ghost text-xl"> 
          TEACHER MANAGEMENT SYSTEM 
        </Link>  
        </h1> 
      </div> 
    </div> 

  );
};

export default Navbar;
