import React, { PureComponent } from 'react'
import TopBar from '../../components/TopBar'
import ContentWrapper from '../../components/ContentWrapper'
import PageTitle from '../../components/PageTitle'
import Paragraph from '../../components/Paragraph'

class Home extends PureComponent {
  render () {
    return (
      <div>
        <TopBar />
        <ContentWrapper>
          <PageTitle>Info Page</PageTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint in, aliquid quam cumque cupiditate qui et dolorem vel nam neque, dignissimos vero soluta quasi aperiam eos a delectus fuga.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint in, aliquid quam cumque cupiditate qui et dolorem vel nam neque, dignissimos vero soluta quasi aperiam eos a delectus fuga.
          </Paragraph>
        </ContentWrapper>
      </div>
    )
  }
}

export default Home
