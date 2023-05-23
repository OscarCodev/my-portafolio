import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { TbTools } from "react-icons/tb";
import { TfiBag } from "react-icons/tfi";

export default function Navbar() {
  return (
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
  );
}

//Contenedor
const Options = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgb(41, 32, 74);
  background: linear-gradient(
    0deg,
    rgba(41, 32, 74, 0.26) 0%,
    rgba(105, 105, 105, 0.26) 100%
  );
  //border: 1px solid white;
  //computadora
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
  transform: translate(23px, 35px);
  @media (min-width: 992px) {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translate(-200px, -23px);
  }
`;

//Codigo reutilizable para las opciones
const Option = css`
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  opacity: 0.3;
  transition: opacity 0.3s ease;
  position: relative;
  &.active {
    opacity: 1;
  }
  &:hover:not(.active) {
    opacity: 0.5;
  }
  &:hover {
    ${ToolTip} {
      opacity: 1;
      transform: translateY(-60px);
    }
  }
  //Comportamiento en desktop
  @media (min-width: 992px) {
    margin: 1rem 0;
    &:hover {
      ${ToolTip} {
        opacity: 1;
        transform: translate(30px, -23px);
      }
    }
  }
`;

const Option1 = styled(NavLink)`
  ${Option};
  background: rgb(22, 173, 221);
  background: linear-gradient(
    342deg,
    rgba(22, 173, 221, 1) 41%,
    rgba(56, 99, 207, 1) 100%
  );
  &.active {
    filter: drop-shadow(0 0 2em rgb(22, 173, 221));
  }
`;

const Option2 = styled(NavLink)`
  ${Option};
  background: rgb(200, 77, 207);
  background: linear-gradient(
    342deg,
    rgba(200, 77, 207, 1) 41%,
    rgba(121, 56, 207, 1) 100%
  );
  &.active {
    filter: drop-shadow(0 0 2em rgb(200, 77, 207));
  }
`;

const Option3 = styled(NavLink)`
  ${Option};
  background: rgb(231, 177, 49);
  background: linear-gradient(
    342deg,
    rgba(231, 177, 49, 1) 40%,
    rgba(255, 142, 42, 1) 100%
  );
  &.active {
    filter: drop-shadow(0 0 2em rgb(231, 177, 49));
  }
`;
