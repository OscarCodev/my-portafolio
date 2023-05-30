import React from "react";
import styled from "styled-components";
import RoutesConfig from "../../RoutesConfig";
//import { TfiBag } from "react-icons/tfi";
import {AiFillGithub} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {RxCodesandboxLogo} from "react-icons/rx"
import {MdEmail} from "react-icons/md"
//En este componente mostramos las pantallas

export default function ViewPages() {
  return (
    <Principal>
      <ContenedorIcons>
        <Icon color="#403e3e" borderLeft={true}><AiFillGithub/></Icon>
        <Icon color="#737373"><RxCodesandboxLogo/></Icon>
        <Icon color="#0A63BC"><BsLinkedin/></Icon>
        <Icon color="#efa032"><MdEmail/></Icon>
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
  height: auto;
  z-index: 9999;
  border-bottom-left-radius: 15px;
  background-color: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
`;

const Icon = styled.a`
  color: #fff;
  padding: .5rem;
  opacity: 0.9;
  background-color: none;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  //transition: opacity 0.2s ease-in, background-color 0.2s ease-in;
  cursor: pointer;
  border-bottom-left-radius: ${props => props.borderLeft && "1rem"};
  &:hover{
    opacity: 1;
    color: ${(props) => props.color};
    background: #F9F9F9;
  }
  &:active {
    scale: 0.95;
  }
  
`


