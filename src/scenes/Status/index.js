import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getOneStatus } from '../../data/status/reducer'
import { fetchStatusById } from '../../data/status/actions'
import TopBar from '../../components/TopBar'
import Status from '../../components/Status'

class Home extends PureComponent {
  static propTypes = {
    statusId: PropTypes.string.isRequired,
    status: PropTypes.object,
    fetchStatusById: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.fetchStatusById(this.props.statusId)
  }

  render () {
    const { status } = this.props

    return (
      <div>
        <TopBar />
        {status && <Status status={status} />}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  statusId: props.match.params.statusId,
  status: getOneStatus(state, props.match.params.statusId)
})

export default connect(mapStateToProps, {
  fetchStatusById
})(Home)
