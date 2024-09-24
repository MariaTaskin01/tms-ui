// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-blue-200 flex justify-center">
      <div>
        <Link to="/" className="btn btn-ghost text-xl">
          TEACHER MANAGEMENT SYSTEM
        </Link>
      </div>
      {/* <div className="flex-none mx-auto">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/designation">Designation</Link></li> 
        <li><Link to="/teacher">Teacher</Link></li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
