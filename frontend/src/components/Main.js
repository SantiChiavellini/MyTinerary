import React from "react";
import Carousel from "../components/Carousel";
import "./styles/Main.css";

class Main extends React.Component {
  render() {
    return (
      <>
        <div id="contenedorMain" className="blue-grey lighten-4 s12 center">
          <div
            className="z-depth-3 s10 m8 responsive"
            id="contenedorLogo"
          ></div>
          <i className="large material-icons deep-orange-text">forward</i>
          <h3
            style={{
              color: "#32a089",
              fontWeight: "bold",
              textShadow: "2px 2px 2px black",
            }}
          >
            Feeling Adventorous?
          </h3>
          <div id="contenedorDoble">
            <div id="imagenTrip">
              <h4
                style={{
                  fontSize: "4vh",
                  fontWeight: "bold",
                  color: "whitesmoke",
                  backgroundColor: "#32a089",
                  textShadow: "2px 2px 2px black",
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
                  backgroundColor: "#32a089",
                  textShadow: "2px 2px 2px black",
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
