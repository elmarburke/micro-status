import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import TopBar from './components/TopBar'
import Logo from './components/Logo'
import Compose from './components/Compose'
import Status from './components/Status'
import { getAllStatus } from '../../data/status/reducer'

class Home extends PureComponent {
  static propTypes = {
    status: PropTypes.array.isRequired
  }

  render () {
    const { status } = this.props

    return (
      <div>
        <TopBar><Logo /></TopBar>
        <Compose />
        {status.map(statusItem =>
          <Status
            key={statusItem._id}
            status={statusItem}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  status: getAllStatus(state)
})

export default connect(mapStateToProps)(Home)
