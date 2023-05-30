import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderSup>
      <ContainerHeader>
        <Text>
          oscar<span>Dev</span>
        </Text>
      </ContainerHeader>
    </HeaderSup>
  );
}

const HeaderSup = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background: #fff;
`;

const ContainerHeader = styled.div`
  width: 100%;
  height: 60px;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 992px) {
    min-width: 992px;
    max-width: 2100px;
  }
`;

const Text = styled.h1`
  font-family: "JetBrains Mono";
  font-size: 1.5rem;
  color: #231e35;
  & span {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #a4a1ff, #65baff);
  }
`;
