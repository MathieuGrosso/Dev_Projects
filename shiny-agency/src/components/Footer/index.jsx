import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/Context'




const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`
 
const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`
 
function Footer() {
    const { toggleTheme, theme } = useContext(ThemeContext)
    return (
        <FooterContainer>
            <NightModeButton onClick={()=> toggleTheme()}>
                Changer de mode:{theme === 'light' ? '☀️' : '🌙'}
                </NightModeButton>
        </FooterContainer>
    )
}
 
export default Footer