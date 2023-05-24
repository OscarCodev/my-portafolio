import React from "react";
import styled from "styled-components";
import RoutesConfig from "../../RoutesConfig";

//En este componente mostramos las pantallas

export default function ViewPages() {
  return (
    <Principal>
      <ContenedorIcons>
        <button>Ico1</button>
        <button>Ico2</button>
        <button>Ico3</button>
      </ContenedorIcons>
      <RoutesConfig />
    </Principal>
  );
}

//La altura en mobile es de 100vh menos la suma del header y el navbar
//La altura en desktop es 100vh menos la altura del header solamente
const Principal = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  overflow-y: auto;
  position: relative;
  @media (min-width: 992px) {
    height: calc(100vh - 60px);
  }
`;


//Contenedor de los iconos de github, linkedin, email
const ContenedorIcons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: 1.8rem;
  z-index: 9999;
  border-bottom-left-radius: 1rem;
  background-color: rgba(255,255,255,0.2);
  button{
    margin: .4rem;
    border: none;
    border-radius: .3rem;
  }
`;
