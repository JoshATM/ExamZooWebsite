// Importing Modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CookieConsent() {
  const navigate = useNavigate();

  const [ccshow, setCCShow] = useState(() => {
    return localStorage.getItem("cookies") !== "true";
  });

  useEffect(() => {
    if (localStorage.getItem("cookies")) {
      setCCShow(false);
    }
  }, []);

  const Declined = () => {
    localStorage.setItem("cookies", "false");
    setCCShow(false);
  };

  const Agreed = () => {
    localStorage.setItem("cookies", "true");
    setCCShow(false);
  };

  return (
    <div className={ccshow ? "open" : ""}>
      {ccshow && (
        <>
          <Background />
          <Container>
            <Header>We use cookies</Header>
            <TextDiv>
              <Text>
                This website uses cookies to improve the experience of the user.
                To view our cookie policy, please view them{" "}
                <Link onClick={() => navigate("/cookie-policy")}>here</Link>.
              </Text>
            </TextDiv>
            <ButtonDiv>
              <Button onClick={Declined}>Decline</Button>
              <Button onClick={Agreed}>Agree</Button>
            </ButtonDiv>
          </Container>
        </>
      )}
    </div>
  );
}

// Styles
const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  z-index: 10;
  opacity: 0.5;
`;

const Container = styled.div`
  width: 500px;
  height: 250px;
  background: #1a8940;
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 20px;
  z-index: 11;
  flex-direction: column;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 750px) {
    width: 250px;
    height: 500px;
    font-size: 20px;
    display: block;
  }
`;

const Header = styled.h1``;

const Text = styled.p``;

const Link = styled.a`
  cursor: pointer;
  text-decoration: underline;
  color: orange;
`;

const TextDiv = styled.div``;

const ButtonDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-end;
  @media (max-width: 750px) {
    gap: 10px;
  }
`;

const Button = styled.button`
  border-radius: 16px;
  background: #ebbf4b;
  border: none;
  width: 150px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
`;
