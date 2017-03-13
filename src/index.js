import React from 'react'
import { render } from 'react-snapshot'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './configureStore'
import './index.css'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
