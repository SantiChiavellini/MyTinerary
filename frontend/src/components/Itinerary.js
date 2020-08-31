import React from "react";
import "./styles/Itineraries.css";
import { NavLink } from "react-router-dom";

class Itinerary extends React.Component {
    
  render(){
    const itineraryBackground = require('../img/miscellaneous/itineraryBackground.png')
    const dollars = [];
    const emptyDollars= [];
    const clocks = [];
    const emptyClocks= [];
    const hearts = [];
    const emptyHearts= [];
    
    
    function iconGenerator(quantity, filledValor, emptyValor) {
      for (var i = 0; i < quantity; i++) {
          filledValor.push('instance')
      } 
      for (var i = 0; i < 5- quantity; i++) {
          emptyValor.push('instance')
      }
    }
    iconGenerator(this.props.itinerary.price, dollars, emptyDollars)
    iconGenerator(this.props.itinerary.duration, clocks, emptyClocks)
    iconGenerator(this.props.itinerary.rating, hearts, emptyHearts)
    
    
    return (
      <>
       { <li id="itineraryBox" style={{backgroundImage: `url(${itineraryBackground})`}}>
          <div id='imgTitleBox'>
            <div id="tineraryImgContainer" style={{
                backgroundImage: `url(${this.props.itinerary.profilePic})`}}>
            </div>
            <div id='tineraryTextContainer'>
              <h3>{this.props.itinerary.title}</h3>
            </div>
          </div>

          <div id='bodyBox'>
            <div className='statisticsBox' id='hashtagContainer'>
              {this.props.itinerary.hashtag.map((hashtag) => {
                return <p id='hashtag'>{hashtag}</p>
              })}
            </div>
            <div className='statisticsBox'>

              <div className='valorBox'>
                <p className='propiety'>Price:</p>{dollars.map(dollar => {
                  return <p className='valor'><i id='dollar' className="small material-icons">local_atm</i></p>
                })}
                {emptyDollars.map(emptyDollar => {
                  return <p className='emptyValor'><i className="small material-icons">local_atm</i></p>
                })}
              </div>
              
              <div className='valorBox'>
                <p className='propiety'>Duration: </p>{clocks.map(clock => {
                  return <p className='valor'><i id='clock' className="small material-icons">access_time</i></p>
                })}
                {emptyClocks.map(emptyClock => {
                  return <p className='emptyValor'><i className="small material-icons">access_time</i></p>
                })}
              </div>

              <div className='valorBox'>
                <p className='propiety'>Rating: </p>{hearts.map(heart => {
                  return <p className='valor'><i id='heart' className="small material-icons">favorite_border</i></p>
                })}
                {emptyHearts.map(emptyHeart => {
                  return <p className='emptyValor'><i className="small material-icons">favorite_border</i></p>
                })}
              </div>
            </div>
          </div>
          
          <div id='commentsBox' className='statisticsBox'>
              <p>Comments</p>
              {this.props.itinerary.comments.map((comment) => {
                return <div>{comment}</div>;
              })}
          </div>
        </li>}
      </>
    );
  }
}

export default Itinerary;
