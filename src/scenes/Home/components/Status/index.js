import React, { PureComponent, PropTypes } from 'react'
import styled from 'styled-components'
import ContentWrapper from '../ContentWrapper'

const StatusWrapper = styled.article`
  height: 5em;
  padding: .5em 3em;
`

class Compose extends PureComponent {
  static propTypes = {
    status: PropTypes.object.isRequired
  }

  render () {
    const { status } = this.props

    return (
      <ContentWrapper>
        <StatusWrapper>
          {status.text}
        </StatusWrapper>
      </ContentWrapper>
    )
  }
}

export default Compose
