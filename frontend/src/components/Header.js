import React from "react";
import "./styles/Header.css";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navbar-fixed">
        <nav id="navbar" className="nav-wrapper">
          <div
            className="brand-logo dropdown-trigger left"
            data-target="dropdown1"
          >
            <i className="large material-icons left">account_circle</i>
          </div>
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <Link>Log In</Link>
            </li>
            <li>
              <Link>Register</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
          </ul>
            <Link
            data-target="mobile-demo"
            className="sidenav-trigger right"
          >
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <Link>To confirm</Link>
            </li>
            <li>
              <Link>To Confirm</Link>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="sidenav deep-orange" id="mobile-demo">
        <li>
          <Link>To Confirm</Link>
        </li>
        <li>
          <Link>To Confirm</Link>
        </li>
        <li>
          <Link>To Confirm</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
