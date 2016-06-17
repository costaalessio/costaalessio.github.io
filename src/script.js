var ReactDOM = require('react-dom');
var React = require('react');
import {Router, Route} from 'react-router'
import Home from './components/Home'
import App from './components/App'
import About from './components/About'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Router>),
  document.getElementById('mount')
)
