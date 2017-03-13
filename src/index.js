import React from 'react'
import { render } from 'react-snapshot'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './configureStore'
import './index.css'

const state = {
  data: {
    status: {
      all: ['s1', 's2'],
      byId: {
        s1: { _id: 's1', userId: 'u1', text: 'Lorem ipsum' },
        s2: { _id: 's2', userId: 'u2', text: 'doro sit atem' }
      }
    }
  }
}

const store = configureStore(state)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
