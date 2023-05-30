import React from "react";
import styled from "styled-components";
import ViewPages from "./ViewPages";
import Navbar from "./Navbar";

export default function Container() {
  return (
    <ContentSup>
      <Content>
        <ViewPages />
        <Navbar />
      </Content>
    </ContentSup>
  );
}

//Gradientes
/*
background: rgb(35, 30, 53);
  background: linear-gradient(
    342deg,
    rgba(35, 30, 53, 1) 50%,
    rgba(128, 45, 91, 1) 100%
  );
*/

const ContentSup = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  background-color: #231e35;
  //border: 1px solid yellow;
`;

const Content = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    min-width: 992px;
    max-width: 2100px;
    display: flex;
    flex-direction: row-reverse;
  }
`;
