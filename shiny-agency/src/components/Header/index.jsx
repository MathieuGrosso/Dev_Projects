import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import darklogo from '../../assets/dark-logo.png'
import { StyledLink } from '../../utils/styles/atoms'




const LogoImg = styled.img`
height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <Link to='/'>
        <LogoImg src={darklogo} alt="logo" />
      </Link>
      <StyledLink to="/"> Accueil </StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
    Faire le test
</StyledLink>
      <StyledLink to="/Freelances"> Freelances </StyledLink>
      <StyledLink to="/Results"> Results </StyledLink>
    </NavContainer>
  )
}


export default Header
