import React, { PureComponent, PropTypes } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import ContentWrapper from '../../../../components/ContentWrapper'

const StatusWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5em;
`

const StatusFooter = styled.footer`
  font-size: .75em;
  color: #777777;
  align-self: flex-end;
`

class Compose extends PureComponent {
  static propTypes = {
    status: PropTypes.object.isRequired
  }

  render () {
    const { status } = this.props
    const readableDate = moment(status.time).format('HH:mm DD.MM.YYYY')

    return (
      <ContentWrapper>
        <StatusWrapper>
          {status.text}
          <br />
          <StatusFooter>{readableDate}</StatusFooter>
        </StatusWrapper>
      </ContentWrapper>
    )
  }
}

export default Compose
