import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import City from "../components/City";
import Itinerary from "../components/Itinerary";
import {NavLink} from "react-router-dom"
import "../components/styles/Itineraries.css";
import axios from "axios";

class Itineraries extends React.Component {
  state = {
    city: {},
    itineraries: [],
  };

  async componentDidMount() {
    const idABuscar = this.props.match.params.id;
    const info = await axios.get(
      `http://127.0.0.1:4000/api/cities/${idABuscar}`
    );
    const city = info.data.city;
    const infoItineraries = await axios.get(
      `http://127.0.0.1:4000/api/itineraries/${idABuscar}`
    );
    const itineraries = infoItineraries.data.Itineraries;
    this.setState({
      city: city,
      itineraries: itineraries,
    });
  }

  render() {
    if (this.state.itineraries.length === 0) {
      return (
      <>
        <Header />
        <ul id="mainContainer">
            {
              <NavLink to= '/Cities'>
                <City city={this.state.city}/>
              </NavLink>
            }
            <div id="noItYet">
            <p>No itineraries loaded yet. Be the first!</p>
            </div>
        </ul>
        <Footer />
      </>
    )}
    return (
      <>
        <Header />
        <ul id="mainContainer">
            {
              <NavLink to= '/Cities'>
                <City city={this.state.city}/>
              </NavLink>
            }
            {this.state.itineraries.map((itinerary) => {
                return <>
                  <Itinerary itinerary={itinerary} />
                </>
            })}
            
        </ul>
        <Footer />
      </>
    );
  }
}

export default Itineraries;
