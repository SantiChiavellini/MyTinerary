import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import City from "../components/City";
import "../components/styles/Cities.css";
import {NavLink} from 'react-router-dom'

class Cities extends React.Component {
  state = {
    cities: [],
    filteredCities: [],
  };

  async componentDidMount() {
    const respuesta = await fetch("http://127.0.0.1:4000/api/cities");
    const info = await respuesta.json();
    this.setState({
      cities: info.cities,
      filteredCities: info.cities,
    });
  };

  capturarValue = (e) => {
    const valorAlmacenado = e.target.value.trim().toLowerCase();
    this.setState({
      filteredCities: this.state.cities.filter(
        (city) => city.city.toLowerCase().indexOf(valorAlmacenado) === 0
      )
    });
  };

  render() {
    const cityNotFound = require("../img/cityNotFound.jpg");
    const filteredSameZero = () => {
      if (this.state.filteredCities.length === 0) {
        return (
          <div
            id="cityNotFound"
            style={{
              backgroundImage: `url(${cityNotFound})`,
            }}
          >
            <p id='notFoundText'
              style={{
                fontSize: "3vh",
                fontWeight: "bold",
                color: "whitesmoke",
                backgroundColor: "#32a08859",
                textShadow: "2px 2px 2px black",
                padding: "1vh 0vw",
                textAlign:'center',
              }}
            >
              City not found.. Try Again!
            </p>
          </div>
        )};
    };

    return (
      <>
        <Header/>
        <div id="mainCities">
          <input type="text" placeholder="What city are you interested in?" name="city" id="city"
            onChange={this.capturarValue}/>
          <ul className="Container">
            {filteredSameZero()}
            {this.state.filteredCities.map((city) => {
              return<>              
                <NavLink to={`/Itineraries/${city._id}`}>
                  <City city={city} />
                </NavLink>
              </>
            })}
          </ul>
        </div>
        <Footer />
      </>
    );
  }
}

export default Cities;
