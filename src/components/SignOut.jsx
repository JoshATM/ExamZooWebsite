// Importing Modules
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import toast from "react-hot-toast"

export default function SignOut() {
  const navigate = useNavigate()
// Sets loggedIn to false so the user cannot access certain features.
  const LogOut = () => {
    localStorage.setItem('loggedIn', false);
    navigate('/');
    toast.success("Logged out");
    window.location.reload();
  }

  return <Button onClick={LogOut}>SignOut</Button>;
}

// Styles
const Button = styled.button`
color: white;
font-family: "Playpen Sans", cursive; // Had to declare again as button had no font-family assigned but was still overiding the body (!important also doesn't work)
border-radius: 15px;
font-size: 20px;
border: none;
background: #1A8940;
width: 125px;
height: 55px;
cursor: pointer;
`