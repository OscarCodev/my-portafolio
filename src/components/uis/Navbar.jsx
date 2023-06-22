import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { TbTools } from "react-icons/tb";
import { TfiBag } from "react-icons/tfi";

export default function Navbar() {
  return (
    <ContainerOptions>
    <Options>
      <Option1 to="/">
        {" "}
        <HiOutlineHome /> <ToolTip>Home</ToolTip>
      </Option1>
      <Option2 to="/tecnologias">
        {" "}
        <TbTools /> <ToolTip>Tecnologias</ToolTip>
      </Option2>
      <Option3 to="/experiencia">
        {" "}
        <TfiBag /> <ToolTip>Experiencia</ToolTip>
      </Option3>
    </Options>
    </ContainerOptions>
  );
}

/* ¿Cómo debo crear un nuevo option?
Primero: 
Estiliza un Navlink, agregarle su degradado, filter, posicion del
Tooltip en mobil, se debe heredar el componente option
al final. 

Aclaracion: el tooltip en pantalla grande sdesktop no necesita
posicionarse manualmente. 

Segundo:
El navlink estilizado tendra el nombre de Option4,
se le debe especificar una ruta, un icono y un Tooltip

*/

//Contenedor
const Options = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1.5rem;
  background: rgb(41, 32, 74);
  background: linear-gradient(
    0deg,
    rgba(41, 32, 74, 0.26) 0%,
    rgba(105, 105, 105, 0.26) 100%
  );
  border: 1px solid #929292;
  //computadora
  @media (min-width: 992px) {
    width: 60px;
    height: 60%;
    flex-direction: column;
    justify-content: center;
  }
`;

const ContainerOptions = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  //border: 1px solid yellow;
  @media (min-width: 992px) {
    width: 60px;
    height: 100%;
    
    flex-direction: column;
    justify-content: center;
  }
`;


const ToolTip = styled.p`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s ease;
  transform: translateY(30px);
  //En computadora
  @media (min-width: 992px) {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translate(-150px, -23px);
  }
`;

//Codigo reutilizable para las opciones
const Option = css`
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  opacity: 0.3;
  //transition: opacity 0.3s ease;
  position: relative;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  &.active {
    opacity: 1;
  }
  &:active {
    scale: 0.95;
  }
  &:hover:not(.active) {
    opacity: 0.5;
  }
  //Comportamiento en desktop
  @media (min-width: 992px) {
    margin: 1rem 0;
    &:hover {
      ${ToolTip} {
        opacity: 1;
        transform: translate(45px, -23px);
      }
    }
  }
`;

//Option 1: Home
const Option1 = styled(NavLink)`
  background: rgb(22, 173, 221);
  background: linear-gradient(
    342deg,
    rgba(22, 173, 221, 1) 41%,
    rgba(56, 99, 207, 1) 100%
  );
  &.active {
    filter: drop-shadow(0 0 2em rgb(22, 173, 221));
  }
  &:hover {
    ${ToolTip} {
      opacity: 1;
      transform: translate(-15px, -80px);
    }
  }
  ${Option};
`;

const Option2 = styled(NavLink)`
  background: rgb(200, 77, 207);
  background: linear-gradient(
    342deg,
    rgba(200, 77, 207, 1) 41%,
    rgba(121, 56, 207, 1) 100%
  );
  &.active {
    filter: drop-shadow(0 0 2em rgb(200, 77, 207));
  }
  &:hover {
    ${ToolTip} {
      opacity: 1;
      transform: translate(-40px, -80px);
    }
  }
  ${Option};
`;

const Option3 = styled(NavLink)`
  background: rgb(231, 177, 49);
  background: linear-gradient(
    342deg,
    rgba(231, 177, 49, 1) 40%,
    rgba(255, 142, 42, 1) 100%
  );
  &.active {
    filter: drop-shadow(0 0 2em rgb(231, 177, 49));
  }
  //Mover su ToolTip
  &:hover {
    ${ToolTip} {
      opacity: 1;
      transform: translate(-40px, -80px);
    }
  }
  ${Option};
`;
