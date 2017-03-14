import React from 'react'
import TopBarWrapper from './components/TopBarWrapper'
import Logo from './components/Logo'
import HeaderLink from './components/HeaderLink'


const TopBar = () => (
  <TopBarWrapper>
    <Logo />
    <div>
      <HeaderLink to='/'>Home</HeaderLink>
    </div>
  </TopBarWrapper>
)

export default TopBar
