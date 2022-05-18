import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          Test
        </Link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/services">All Service</Link>
          </li>
          <li>
            <Link to="/addService">Add Service</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
