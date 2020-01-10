import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Styles/App.css'
import Splash from './Splash'
import FilterControls from './FilterControls';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path = '/' component={Splash} />
          <Route path ='/home' component={FilterControls} /> 
        </Switch>
      </div>
    )
  }
}


export default App;


