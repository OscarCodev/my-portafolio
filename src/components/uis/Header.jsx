import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  const { pathname } = useLocation();

  let miText;

  if (pathname === "/") {
    miText = (
      <p className="primerPath">
        oscar<span>Dev</span>
      </p>
    );
  } else if (pathname === "/tecnologias") {
    miText = <p className="segundoPath"> Tecnologías</p>;
  } else if ("/experiencia") {
    miText = <p className="tercerPath"> Experiencia</p>;
  }

  return (
    <HeaderSup>
      <ContainerHeader>
        <Text>{miText}</Text>
      </ContainerHeader>
    </HeaderSup>
  );
}

const HeaderSup = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: #231e35;
`;

const ContainerHeader = styled.div`
  width: 100%;
  height: 60px;
  background: #f9f9f9;
  border-bottom: 1px solid #929292;
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
  p {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  p.primerPath {
    color: #231e35;
    span {
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-image: linear-gradient(to right, #a4a1ff, #65baff);
    }
  }
  p.segundoPath {
    background-image: linear-gradient(to right, #231e35, #e2a1d8);
  }
  p.tercerPath {
    background-image: linear-gradient(to right, #231e35, #ffd972);
  }
`;
