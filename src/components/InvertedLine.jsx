// Importing Modules
import styled from "styled-components";
import React from "react";

// Draws a line and uses props to get the height from the top and mediaTop to gets the height from the top using media queries
export default function Line({ lineTop, mediaTop }) {
  return <LineContainer top={lineTop} mediaTop={mediaTop}></LineContainer>;
}

// Styles
const LineContainer = styled.div`
  top: ${(props) => props.top};
  width: -webkit-fill-available;
  background: #ebbf4b;
  display: flex;
  position: absolute;
  height: 5px;

  @media (max-width: 750px) {
    top: ${(props) => props.mediaTop};
  }
`;
