// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-blue-200">
        <div className="">
        <Link to = "/" className="btn btn-ghost text-xl">TMS</Link>
      </div>
      <div className="flex-none mx-auto">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li> 
          {/* <li><Link to="/dashboard">Dashboard</Link></li>  */}
        </ul>
        </div>
        </div>
    );
};

export default Navbar;