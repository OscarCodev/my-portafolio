import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imagenProgramador from "../../assets/Programer.jpg";

export default function HomeScreen() {
  return (
    <ContainerPrincipal transition-style="in:circle:top-right">
      <Presentacion>
        <h2>I'm Oscar Bautista</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          beatae aut earum libero et aspernatur error! Explicabo, sequi officiis
          sint nulla mollitia reprehenderit nostrum illum nisi? Natus dolores
          corrupti velit.
        </p>
        <Button></Button>
      </Presentacion>
      <ContenedorImg>
        <img src={imagenProgramador} alt="programador" />
      </ContenedorImg>
    </ContainerPrincipal>
  );
}

const ContainerPrincipal = styled.div`
  //border: 2px solid blue;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: rgb(35, 30, 53);
  background: rgb(35, 30, 53);
    background: linear-gradient(
      180deg,
      rgba(35, 30, 53, 1) 5%,
      rgba(27, 135, 148, 0.2) 20%,
      rgba(35, 30, 53, 1) 40%
    );
  //5 20 40
  @media (min-width: 992px) {
    height: calc(100vh - 60px);
    flex-direction: row;
    justify-content: center;
    background: linear-gradient(
      90deg,
      rgba(35, 30, 53, 1) 0%,
      rgba(27, 135, 148, 0.2) 26%,
      rgba(35, 30, 53, 1) 56%
    );
  }
`;

const Presentacion = styled.div`
  //border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "JetBrains Mono";
  h2 {
    //border: 1px solid coral;
    font-size: 2rem;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    color: #f9f9f9;
    &::after {
      content: "";
      position: absolute;
      left: 5rem;
      width: 95px;
      height: 6px;
      background: linear-gradient(to right, #a4a1ff, #65baff);
      display: block;
    }
  }
  p {
    margin-bottom: 3rem;
    font-weight: normal;
    text-align: center;
    font-size: 1.2rem;
    color: #dadada;
  }
  @media (min-width: 992px) {
    justify-content: center;
    align-items: flex-start;
    width: 80%;
    h2{
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 2rem;
      text-align: left;
    }
  }
`;

const Button = styled.div`
  position: relative;
  background-color: transparent;
  color: #e8e8e8;
  font-size: 17px;
  font-weight: 600;
  border-radius: 10px;
  width: 150px;
  height: 45px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(51, 51, 51, 0.2);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  &::before {
    content: "thank you !! 🫡";
    font-size: .8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to right, #a4a1ff, #65baff);
    color: #343434;
    transform: translate(0%, 90%);
    z-index: 99;
    position: relative;
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  &::after {
    content: "Dowload CV";
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(342deg, #2890b0 41%, #28417f 100%);
    width: 100%;
    height: 100%;
    pointer-events: none;
    transform-origin: top;
    transform: translate(0%, -100%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  &:hover::before {
    transform: translate(0%, 0%);
  }
  &:hover::after {
    transform: translate(0%, -200%);
  }
  &:focus {
    outline: none;
  }
  &:active {
    scale: 0.95;
  }
`;

const ContenedorImg = styled.div`
  //border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    //border: 1px solid blue;
    width: 100%;
  }
  //Comportamiento en desktop
  @media (min-width: 992px) {
    img {
      width: 100%;
      height: calc(100vh - 60px);
      //border: 1px solid red;
    }
  }
`;
