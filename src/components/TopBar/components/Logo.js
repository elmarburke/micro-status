import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  color: #dcdcdc;
`
const Dot = styled.span`
  &:after {
    color: #9b58b5;
    content: '▲';
    font-size: bigger;
  }
`

const Logo = () => (
  <LogoWrapper>micro<Dot />status</LogoWrapper>
)

export default Logo
