// Importing Modules
import styled from 'styled-components'
import React, { useState } from 'react'
import Logo from '../assets/images/RigetZooAdventuresLogo.png'
import { useNavigate } from 'react-router-dom'
import Line from './Line'
import InvertedLine from './InvertedLine'
import SignOut from './SignOut'
import InvertedSignOut from './InvertedSignOut'

export default function Header() {
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState('-100%')
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  
  const loggedIn = localStorage.getItem('loggedIn');
  
  return (
    <HeaderContainer>
      <HeaderLogo onClick={() => navigate('/')} src={Logo} alt='Riget Zoo Adventures Logo with Elephant'/>
      <LinksContainer>
        <LinkText onClick={() => navigate('/tickets')}>Tickets</LinkText>
        <LinkText onClick={() => navigate('/materials')}>Materials</LinkText>
        {// If Logged In displays the Sign Out Button, if not then displays Login
          loggedIn ?
          <SignOut/>
          :
          <LinkText onClick={() => navigate('/login')}>Log In</LinkText>
        }
      </LinksContainer>

        {/* Hamburger Menu Icon */}
      <HamburgerIcon onClick={toggleSidebar}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18L20 18" stroke="#1A8940" strokeWidth="2" strokeLinecap="round"/><path d="M4 12L20 12" stroke="#1A8940" strokeWidth="2" strokeLinecap="round"/><path d="M4 6L20 6" stroke="#1A8940" strokeWidth="2" strokeLinecap="round"/></svg>
      </HamburgerIcon>
      
      {/* Sidebar Funcionality */}
      <Sidebar open={isSidebarOpen}>
        <SBClose onClick={toggleSidebar}><svg width="50px" height="50px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#EBBF4B" stroke-width="0.984"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.336"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#EBBF4B"></path></g></svg></SBClose>
        <SBLinksContainer>
          <SBLinkText onClick={() => (navigate('/'), toggleSidebar())}>Home</SBLinkText>
          <InvertedLine lineTop={125 * 1 + "px"}/>
          <SBLinkText onClick={() => (navigate('/tickets'), toggleSidebar())}>Tickets</SBLinkText>
          <InvertedLine lineTop={125 * 2 + "px"}/>
          <SBLinkText onClick={() => navigate('/materials', toggleSidebar())}>Materials</SBLinkText>
          <InvertedLine lineTop={125 * 3 + "px"}/>
          {// If Logged In displays the Sign Out Button, if not then displays Login
          loggedIn ?
          <InvertedSignOut/>
          :
          <SBLinkText onClick={() => navigate('/login', toggleSidebar())}>Log In</SBLinkText>
          }
          <InvertedLine lineTop={125 * 4 + "px"}/>
        </SBLinksContainer>
      </Sidebar>

      <Line lineTop="175px"/>
    </HeaderContainer>
  )
}

// Styles
const SBLinksContainer = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
align-content: center;
justify-content: space-around;
width: -webkit-fill-available;
flex-direction: column;
`

const SBLinkText = styled.p`
color: #EBBF4B;

font-family: "Caveat Brush", cursive;
font-weight: 400;
font-style: normal;

font-size: 40px;

cursor: pointer;

&:hover{
  text-decoration: underline;
}
`

const SBClose = styled.button`
position: absolute;
top: 5px;
right: 5px;
background: none;
border: none;
`

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.open ? '-100%' : '0%')};
  transition: 0.5s;
  bottom: 0;
  width: 100%;
  background-color: #1A8940;
  z-index: 100;

  
`

const HamburgerIcon = styled.div`
display: none;
cursor: pointer;
width: 30vh;
max-height: 200px;

@media (max-width: 750px){
  display: flex;
}
`

const HeaderContainer = styled.div`
    background: #EBBF4B;
    display: flex;
    height: 175px;
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
`

const LinksContainer = styled.div`
  display: flex;
  width: -webkit-fill-available;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 750px) {
    display: none;
    justify-content: space-evenly;
  }
`

const LinkText = styled.a`
  color: #1A8940;

  font-family: "Caveat Brush", cursive;
  font-weight: 400;
  font-style: normal;

  font-size: 40px;

  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`

const HeaderLogo = styled.img`
  width: 400px;
  object-fit: cover;
  cursor: pointer;
  max-height: 150px;
  max-width: 315px;
`