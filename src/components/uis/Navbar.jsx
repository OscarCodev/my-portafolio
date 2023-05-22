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
        <HiOutlineHome />{" "}
      </Option1>
      <Option2 to="/tecnologias">
        {" "}
        <TbTools />{" "}
      </Option2>
      <Option3 to="/experiencia">
        {" "}
        <TfiBag />{" "}
      </Option3>
    </Options>
  );
}

//Contenedor
const Options = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid yellow;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  //computadora
  @media (min-width: 992px) {
    max-width: 60px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

//Codigo reutilizable para las opciones 
const Option = css`
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  opacity: 0.3;
  transition: opacity 0.3s ease;
  &.active {
    opacity: 1;
  }
  @media (min-width: 992px){
    margin: 1rem 0;
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
