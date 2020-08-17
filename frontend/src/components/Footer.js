import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="page-footer deep-orange s12">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <div className="grey-text text-lighten-3">
                    Link 1
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright s12">
          <div className="container">
            © 2014 Copyright Text
            <div className="grey-text text-lighten-4 right">
              More Links
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
