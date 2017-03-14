import React, { PureComponent } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './scenes/Home'
import Status from './scenes/Status'
import NotFound from './scenes/NotFound'

import './App.css'

class App extends PureComponent {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/status/:statusId' component={Status} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
