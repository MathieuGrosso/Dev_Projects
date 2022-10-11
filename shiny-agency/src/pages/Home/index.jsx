import React from 'react'
import styled from 'styled-components'
// import {useState} from 'react'
import home from '../../assets/home-illustration.svg'
import colors from '../../utils/styles/colors'
import { StyledLink } from '../../utils/styles/atoms'

const HomeWrapper = styled.div`
display: flex;
  justify-content: center;
`



const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${colors.background};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`

const Illustration = styled.img`
  flex: 2;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
  `
const StyledTitle = styled.h2`

padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
  `


function Home() {

  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftCol>
          <StyledTitle>
            <h2> Répérez vos besoins, on s'occupe du reste </h2>
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={home} alt="home" />
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
