import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

import { signOut } from "firebase/auth";

const NavMenu = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Test
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/services">All Service</Link>
          </li>
          <li>
            <Link to="/addService">Add Service</Link>
          </li>
          <li>
            {user ? (
              <Link to="/services" onClick={() => signOut(auth)}>
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
