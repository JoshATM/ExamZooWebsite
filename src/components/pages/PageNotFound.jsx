// Importing Modules
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

// Error 404 Page
export default function PageNotFound() {
  const InvalidPath = window.location.pathname;
  const [counter, setCounter] = useState(5);

  // Counter that counts down from 5 then sends them to the home page
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  if (counter === 0) {
    window.location.replace("/");
  }
  return (
    <StyledContainer>
      <StyledHeaderOne>Error 404</StyledHeaderOne>
      <StyledHeaderTwo>Invalid Path {InvalidPath} Not Found</StyledHeaderTwo>
      <StyledText>
        Please make sure you typed the pathname in correctly
      </StyledText>
      <StyledText>Redirecting you to Home in {counter}...</StyledText>
    </StyledContainer>
  );
}

// Styles
const StyledContainer = styled.div`
  color: #1a8940;
  position: fixed;

  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledHeaderOne = styled.p`
  font-size: 96px;
`;

const StyledHeaderTwo = styled.p`
  font-size: 36px;
`;

const StyledText = styled.p`
  font-size: 24px;
`;
