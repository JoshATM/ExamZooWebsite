// Importing Modules
import React, { useState } from "react";
import WomanWithGoats from "../../assets/images/WomanWithGoats.jpg";
import styled from "styled-components";
import Line from "../Line";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export default function SignUp() {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  // Signs the User up and adds it to the database
  const Submit = async (e) => {
    e.preventDefault();

    if ((firstname && lastname && email && password && confPassword) === "") {
      toast("Please fill in all the Boxes!");
    } else if (password !== confPassword) {
      toast.error(
        "Passwords do not match, please make sure you enter them correctly!"
      );
    } else if (password.length < 8) {
      toast("Please make your password longer than 8 characters!");
    } else {
      try {
        // Email validation to check if it already exists
        const emailAlreadyExists = await fetch(
          `http://localhost:5000/check-email/${email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const ifEmailExists = await emailAlreadyExists.json();

        if (ifEmailExists) {
          toast.error("This email is already in use. \n You can Log in Below.");
        } else {
          const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstname,
              lastname,
              email,
              password,
            }),
          });

          if (response.ok) {
            localStorage.setItem("loggedIn", true);
            navigate("/dashboard");
            window.location.reload();
          } else {
            console.error("Error registering user");
          }
        }
      } catch (error) {
        console.error("Error registering user: " + error.message);
      }
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
          <StyledNameContainer>
            <FirstNameDiv>
              <StyledText>First Name:</StyledText>
              <StyledInput
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FirstNameDiv>
            <LastNameDiv>
              <StyledText>Last Name:</StyledText>
              <StyledInput
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </LastNameDiv>
          </StyledNameContainer>
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
          <StyledText>Confirm Password:</StyledText>
          <StyledInput
            type="password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <StyledButton onClick={Submit}>Submit</StyledButton>
          <LogInText>Already have an account?</LogInText>
          <LogInButton onClick={() => navigate("/login")}>Log In</LogInButton>
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
  top: 55%;
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

const LogInButton = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 12.5px;
  background: orange;
  color: white;
  font-family: "Playpen Sans", cursive;
`;

const LogInText = styled.text``;

const StyledNameContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const FirstNameDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LastNameDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
