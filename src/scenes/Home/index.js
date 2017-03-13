import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import TopBar from './components/TopBar'
import Logo from './components/Logo'
import Compose from './components/Compose'
import Status from './components/Status'
import { getAllStatus } from '../../data/status/reducer'
import { addStatus } from '../../data/status/actions'

class Home extends PureComponent {
  static propTypes = {
    status: PropTypes.array.isRequired,
    addStatus: PropTypes.func.isRequired
  }

  handleSubmit = (text) => {
    this.props.addStatus({
      _id: `status:${new Date().toISOString()}`,
      text,
      time: new Date().toISOString()
    })
  }

  render () {
    const { status } = this.props

    return (
      <div>
        <TopBar><Logo /></TopBar>
        <Compose onSubmit={this.handleSubmit} />
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

export default connect(mapStateToProps, {
  addStatus
})(Home)
