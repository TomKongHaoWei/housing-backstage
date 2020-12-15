import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
// import asyncComponent from './asyncComponent.jsx'
import asyncComponent from './asyncComponent'

// 原来的写法
// import Home from '../pages/home'
// import Login from '../pages/login'

// 按需加载写法
const Home = asyncComponent(() => import('../pages/home'));
const Login = asyncComponent(() => import('../pages/home'));

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