// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-blue-200">
      <div className="flex-none mx-auto">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/teacher">Teacher</Link></li>
          <li><Link to="/designation">Designation</Link></li> 
        </ul>
        </div>
        </div>
    );
};

export default Navbar;