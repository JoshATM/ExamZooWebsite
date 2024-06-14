// Importing Modules
import React, { useState } from "react";
import WomanWithGoats from "../../assets/images/WomanWithGoats.jpg";
import styled from "styled-components";
import Line from "../Line";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export default function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Logs the User In
  const Submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // Response in case of Error
      console.log(response);

      if (response.ok) {
        localStorage.setItem("loggedIn", true);
        navigate("/dashboard");
        window.location.reload();
      } else if (response.status === 401) {
        toast.error("Invalid Email or Password!");
      } else {
        console.error("Error logging in");
      }
    } catch (error) {
      console.error("Error logging in: " + error.message);
    }
  };

  return (
    <>
      <StyledContainer>
        <StyledImage
          src={WomanWithGoats}
          alt="Woman taking picture with Goats"
        />
        <StyledLogInContainer>
          <StyledText>Email:</StyledText>
          <StyledInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledText>Password:</StyledText>
          <StyledInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton onClick={Submit}>Submit</StyledButton>
          <SignUpText>Need to create an account?</SignUpText>
          <SignUpButton onClick={() => navigate("/signup")}>
            Sign Up
          </SignUpButton>
        </StyledLogInContainer>
      </StyledContainer>
      <Line lineTop="948px" />
    </>
  );
}

// Styles
const StyledContainer = styled.div`
  display: flex;
`;

const StyledImage = styled.img`
  object-fit: cover;
  max-width: 50%;
  min-height: 81.5vh;
  height: -webkit-fill-available;
  @media (max-width: 750px) {
    display: none;
  }
`;

const StyledLogInContainer = styled.div`
  width: -webkit-fill-available;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(0%, -50%);
  gap: 20px;
  @media (max-width: 750px) {
    left: auto;
  }
`;

const StyledText = styled.p`
  font-size: 24px;
  width: -webkit-fill-available;
  height: 0px;
`;

const StyledInput = styled.input`
  border-radius: 12.5px;
  border: none;
  width: -webkit-fill-available;
  height: 35px;
  &:focus-visible {
    outline: none;
  }
`;

const StyledButton = styled.button`
  color: white;
  font-family: "Playpen Sans", cursive; // Had to declare again as button had no font-family assigned but was still overiding the body (!important also doesn't work)
  border-radius: 12.5px;
  border: none;
  background: #1a8940;
  width: 100px;
  height: 35px;
`;

const SignUpButton = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 12.5px;
  background: orange;
  color: white;
  font-family: "Playpen Sans", cursive;
`;

const SignUpText = styled.text``;
