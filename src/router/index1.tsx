import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import Login from '../pages/login'

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} exact/>
        </Switch>
      </HashRouter>
    )
  }
}