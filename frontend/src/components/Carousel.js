import React from "react";
import "./styles/Carousel.css";

function Carousel() {
  let WorldCities = ["Barcelona", "NuevaYork", "Paris", "Estambul"];
  let WorldCities2 = ["BuenosAires", "Roma", "Giza", "Florencia"];
  let WorldCities3 = ["Shanghái", "Madrid", "Budapest", "Sidney"];

  

  return (
    <>
      <div className="carousel carousel-slider s12">
        <div className="carousel-item s12">
          <div className="contenedorImg s12">
            {WorldCities.map((Ciudad) => {
              const fotoCiudad = require(`./img/WorldCities/${Ciudad}.jpg`);
              return (
                <div
                  className='z-depth-3 col s12 m6'
                  key={Ciudad}
                  id="contenedorImg"
                  style={{
                    backgroundImage: `url(${fotoCiudad})`,
                    backgroundPosition: "center",
                    backgroundSize: 'cover',
                  }}
                >
                  <p className="deep-orange white-text center" style={{fontSize:'3vh'}}>{Ciudad}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="carousel-item s12">
          <div className="contenedorImg s12">
            {WorldCities2.map((Ciudad) => {
              const fotoCiudad = require(`./img/WorldCities/${Ciudad}.jpg`);
              return (
                <div
                  className='z-depth-3 col s12 m6'
                  key={Ciudad}
                  id="contenedorImg"
                  style={{
                    backgroundImage: `url(${fotoCiudad})`,
                    backgroundPosition: "center",
                    backgroundSize: 'cover',
                  }}
                >
                  <p className="deep-orange white-text center" style={{fontSize:'3vh'}}>{Ciudad}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="carousel-item s12">
          <div className="contenedorImg s12">
            {WorldCities3.map((Ciudad) => {
              const fotoCiudad = require(`./img/WorldCities/${Ciudad}.jpg`);
              return (
                <div
                  className='z-depth-3 col s12 m6'
                  key={Ciudad}
                  id="contenedorImg"
                  style={{
                    backgroundImage: `url(${fotoCiudad})`,
                    backgroundPosition: "top center",
                    backgroundSize: 'cover',
                  }}
                >
                  <p className="deep-orange white-text center" style={{fontSize:'3vh'}}>{Ciudad}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
