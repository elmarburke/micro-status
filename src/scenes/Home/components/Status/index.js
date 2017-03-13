import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../ContentWrapper'

const StatusWrapper = styled.article`
  height: 5em;
  padding: .5em 3em;
`

const ComposeBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: .5em 3em;
`

const Compose = () => (
  <ContentWrapper>
    <StatusWrapper>
      I've done things
    </StatusWrapper>
    <ComposeBottom>
    </ComposeBottom>
  </ContentWrapper>
)

export default Compose
