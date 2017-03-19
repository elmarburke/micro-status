import React, { PureComponent, PropTypes } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { connect } from 'react-redux'

import Home from './scenes/Home'
import Status from './scenes/Status'
import Info from './scenes/Info'
import NotFound from './scenes/NotFound'
import { startReplication } from './data/status/actions'

import './App.css'

class App extends PureComponent {
  static propTypes = {
    startReplication: PropTypes.func.isRequired,
  }

  componentDidMount () {
    this.props.startReplication()
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/status/:statusId' component={Status} />
          <Route path='/info' component={Info} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default connect(null, {startReplication})(App)
