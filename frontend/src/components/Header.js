import React from "react";
import "./styles/Header.css";

function Header() {
  return (
    <>
      <nav>
        <div className="nav-wrapper deep-orange">
          <div
            className="brand-logo dropdown-trigger left"
            href="#"
            data-target='dropdown1'
            ><i className="large material-icons left">account_circle</i></div>
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <a href="#!">Sign In</a>
            </li>
            <li>
              <a href="#!">Sign Out</a>
            </li>
            <li className="divider" tabIndex="-1"></li>
          </ul>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger right">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="badges.html">A confirmar</a>
            </li>
            <li>
              <a href="collapsible.html">A confirmar</a>
            </li>
            <li>
              <a href="mobile.html">A confirmar</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav deep-orange" id="mobile-demo">
        <li>
          <a href="sass.html">A confirmar</a>
        </li>
        <li>
          <a href="badges.html">A confirmar</a>
        </li>
        <li>
          <a href="collapsible.html">A confirmar</a>
        </li>
      </ul>
    </>
  );
}

export default Header;
