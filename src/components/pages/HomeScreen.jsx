import React from "react";
import styled from "styled-components";
import imagenProgramador from "../../assets/Programer.jpg";

//Podemos maqueta como deseemos
export default function HomeScreen() {
  return (
    <ContainerPrincipal>
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
  height: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    height: calc(100vh - 60px);
    flex-direction: row;
    justify-content: center;
    padding: 0 5rem;
  }
`;


const Presentacion = styled.div`
  margin: 0 2rem;
  //border: 1px solid green;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2rem;
    margin: 1rem 0;
  }
  p {
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1.2rem;
  }
  button {
    margin-bottom: 1rem;
  }
  @media (min-width: 992px) {
    justify-content: center;
    align-items: flex-start;
    width: 80%;
    p{
      text-align: left;
    }
  }
`;

const ContenedorImg = styled.div`
  margin: 0 2rem;
  //border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
  }
  @media (min-width: 992px) {
  }
`;
