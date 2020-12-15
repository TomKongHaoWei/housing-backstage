import React, { Component, lazy } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));

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