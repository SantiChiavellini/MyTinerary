import React from "react";
import Carousel from "../components/Carousel";
import "./styles/Main.css";
import { NavLink } from "react-router-dom";


class Main extends React.Component {

  render() {
    return (
      <>
        <div id="contenedorMain" className="white s12 center">
          <div
            className="z-depth-3 s10 m8 responsive"
            id="contenedorLogo">
              <NavLink to='/Home'></NavLink>
          </div>
          <div id="contenedorFlecha">
            <NavLink to='/Cities'><i className="large material-icons deep-orange-text">forward</i></NavLink>
            <p style={{
              color: "#32a089",
              fontWeight: "bold",
              textShadow: "2px 2px 2px black",
              fontSize: "4vh",
            }}>Go to Cities</p>
          </div>
          <h3
            style={{
              color: "#32a089",
              fontWeight: "bold",
              textShadow: "2px 2px 2px black",
            }}
          >
            Feeling Adventurous?
          </h3>
          <div id="contenedorDoble">
            <div id="imagenTrip">
              <h4
                style={{
                  fontSize: "4vh",
                  fontWeight: "bold",
                  color: "whitesmoke",
                  backgroundColor: "#32a08859",
                  textShadow: "2px 2px 2px black",
                  padding: '1vh 0vw',
                }}
              >
                Find your perfect trip, designed by insiders who know and love
                their cities.
              </h4>
            </div>
            <div id="contenedorFlecha" className="col s2 offset-s10"></div>
            <div id="imagenDestinos">
              <h4
                style={{
                  fontSize: "4vh",
                  fontWeight: "bold",
                  color: "whitesmoke",
                  backgroundColor: "#32a08859",
                  textShadow: "2px 2px 2px black",
                  padding: '1vh 0vw',
                }}
              >
                Some of most chosen trips:
              </h4>
            </div>
          </div>
          <Carousel className="s12" />
        </div>
      </>
    );
  }
}

/* blue-grey lighten-4
<img src={logo} alt="Image Logo" /> */

export default Main;
