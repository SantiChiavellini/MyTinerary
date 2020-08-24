import React from 'react'
import Home from './pages/Home'
import Cities from './pages/Cities'
import {BrowserRouter, Route, NavLinks, Switch, Redirect} from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path= "/Home" component={Home}/>
          <Route path="/Cities" component={Cities}/>
          <Redirect to="/Home"/>
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}


 


export default App