import React, { PureComponent } from 'react'
import TopBar from './components/TopBar'
import Logo from './components/Logo'
import Compose from './components/Compose'
import Status from './components/Status'

class Home extends PureComponent {
  render () {
    return (
      <div>
        <TopBar><Logo /></TopBar>
        <Compose />
        <Status />
        <Status />
        <Status />
      </div>
    )
  }
}

export default Home
