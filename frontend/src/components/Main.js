import React from "react";
import Carousel from '../components/Carousel';
import './styles/Main.css';

class Main extends React.Component {
  render() {
    return (
      <>
        <div id="main" className="blue-grey lighten-3 s12 center">
          <div id="contenedorMain" className="container blue-grey lighten-4 s12">
            <div className='z-depth-3' id='contenedorLogo'></div>
            <div id='contenedorFlecha' className="col s2 offset-s10"></div>
            <div id='imagenDestinos'>
              <h2 style={{fontSize: '4vh', fontWeight:'bold', color:'whitesmoke'}}>Algúnos de los destinos más buscados:</h2>
            </div>
            <Carousel className='s12'/>
          </div>
        </div>
      </>
    );
  }
}

/* blue-grey lighten-4
<img src={logo} alt="Image Logo" /> */

export default Main