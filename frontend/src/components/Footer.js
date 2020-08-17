import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="page-footer s12">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">MyTinerary Footer Content.</h5>
              <p className="grey-text text-lighten-4">
                Here´s gonna be MyTinerary relevant info.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Social Media.</h5>
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
            © 2020 Copyright Text
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
