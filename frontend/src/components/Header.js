import React from "react";
import "./styles/Header.css";
import { NavLink } from "react-router-dom";

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
              <a to>Log In</a>
            </li>
            <li>
              <a href>Register</a>
            </li>
            <li className="divider" tabIndex="-1"></li>
          </ul>
            <a href
            data-target="mobile-demo"
            className="sidenav-trigger right"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <a href>To confirm</a>
            </li>
            <li>
              <a href>To Confirm</a>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="sidenav deep-orange" id="mobile-demo">
        <li>
          <a href>To Confirm</a>
        </li>
        <li>
          <a href>To Confirm</a>
        </li>
        <li>
          <a href>To Confirm</a>
        </li>
      </ul>
    </>
  );
}

export default Header;
