/* eslint-disable no-unused-vars */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-blue-300 flex justify-center">
      <div>
        <h1>
        <Link to="/" className="btn btn-ghost text-xl">
          TEACHER MANAGEMENT SYSTEM
        </Link> 
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
