import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import TopBarWrapper from './components/TopBarWrapper'
import Logo from './components/Logo'
import HeaderLink from './components/HeaderLink'
import Navigation from './components/Navigation'
import { getReplicationStatus } from '../../data/status/reducer'

class TopBar extends PureComponent {
  static propTypes = {
    replicationRunning: PropTypes.bool.isRequired,
  }

  render() {
    const { replicationRunning } = this.props

    return (
      <TopBarWrapper>
        <Logo />
        <Navigation>
          <HeaderLink to='/'>Home</HeaderLink>
          <HeaderLink to='/info'>Info</HeaderLink>
        </Navigation>
        {replicationRunning ? '🔗' : '📵'}
      </TopBarWrapper>
    )
  }
}


const mapStateToProps = (state) => ({
  replicationRunning: getReplicationStatus(state)
})

export default connect(mapStateToProps)(TopBar)
