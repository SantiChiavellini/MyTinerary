import React from 'react'
import Home from './pages/Home'
import Cities from './pages/Cities'
import Itineraries from './pages/Itineraries'
import {BrowserRouter, Route, NavLinks, Switch, Redirect} from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path= "/Home" component={Home}/>
          <Route path="/Cities" component={Cities}/>
          <Route path="/Itineraries/:id" component={Itineraries}/>
          <Redirect to="/Home"/>
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}


 
/* /:id */

export default App