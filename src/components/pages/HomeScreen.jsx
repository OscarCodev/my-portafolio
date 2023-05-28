import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imagenProgramador from "../../assets/Programer.jpg";

export default function HomeScreen() {
  return (
    <ContainerPrincipal transition-style="in:circle:hesitate">
      <Presentacion>
        <h2>I'm Oscar Bautista</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          beatae aut earum libero et aspernatur error! Explicabo, sequi officiis
          sint nulla mollitia reprehenderit nostrum illum nisi? Natus dolores
          corrupti velit.
        </p>
        <button>Dowload CV</button>
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
  background: linear-gradient(
    180deg,
    rgba(35, 30, 53, 1) 5%,
    rgba(16, 75, 88, 1) 20%,
    rgba(35, 30, 53, 1) 40%
  );
  @media (min-width: 992px) {
    height: calc(100vh - 60px);
    flex-direction: row;
    justify-content: center;
    background: rgb(35, 30, 53);
    background: linear-gradient(
      90deg,
      rgba(35, 30, 53, 1) 5%,
      rgba(16, 75, 88, 1) 31%,
      rgba(35, 30, 53, 1) 60%
    );
  }
`;

const Presentacion = styled.div`
  //border: 1px solid green;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "JetBrains Mono";
  h2 {
    //border: 1px solid coral;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 5rem;
      width: 95px;
      height: 6px;
      background: rgb(22, 173, 221);
      background: linear-gradient(
        342deg,
        rgba(22, 173, 221, 1) 41%,
        rgba(56, 99, 207, 1) 100%
      );
      display: block;
    }
  }
  p {
    margin-bottom: 1rem;
    font-weight: normal;
    text-align: center;
    font-size: 1.2rem;
    color: #dadada;
  }
  button {
    margin-bottom: 1rem;
  }
  @media (min-width: 992px) {
    justify-content: center;
    align-items: flex-start;
    width: 80%;
    p {
      text-align: left;
    }
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
