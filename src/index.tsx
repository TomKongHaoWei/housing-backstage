import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
    </Switch>
  </Router>,
  document.getElementById('root')
)

reportWebVitals();