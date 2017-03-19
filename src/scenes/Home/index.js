import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import TopBar from '../../components/TopBar'
import Compose from './components/Compose'
import Status from '../../components/Status'
import { getAllStatus } from '../../data/status/reducer'
import { addStatus, fetchStatus, subscribeToPouchChangesFeed, unsubscribeFromChangesFeed } from '../../data/status/actions'

class Home extends PureComponent {
  static propTypes = {
    status: PropTypes.array.isRequired,
    addStatus: PropTypes.func.isRequired,
    fetchStatus: PropTypes.func.isRequired,
    subscribeToPouchChangesFeed: PropTypes.func.isRequired,
    unsubscribeFromChangesFeed: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.fetchStatus()
    this.changesFeed = this.props.subscribeToPouchChangesFeed()
  }

  componentWillUnmount () {
    this.props.unsubscribeFromchangesFeed(this.changesFeed)
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
        <TopBar />
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
  addStatus,
  fetchStatus,
  subscribeToPouchChangesFeed,
  unsubscribeFromChangesFeed
})(Home)
