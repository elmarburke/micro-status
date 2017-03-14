import React, { PureComponent } from 'react'
import TopBar from '../../components/TopBar'
import ContentWrapper from '../../components/ContentWrapper'
import PageTitle from '../../components/PageTitle'

class Home extends PureComponent {
  render () {
    return (
      <div>
        <TopBar />
        <ContentWrapper>
          <PageTitle>Page not Found</PageTitle>
        </ContentWrapper>
      </div>
    )
  }
}

export default Home
