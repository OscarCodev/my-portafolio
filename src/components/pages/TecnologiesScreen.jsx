import React from "react";
import styled from "styled-components";

export default function TecnologiesScreen() {
  //const {frontend, backend, mobile, design} = tecnologias;

  const dataCampo = ["Design", "Frontend", "Backend"]

  return (
    <ContainerTecnologies transition-style="in:circle:top-right">
      {
        dataCampo.map(campo => (
          <ContainerCampo title={campo}/>
        ))
      }
    </ContainerTecnologies>
  );
}

const ContainerTecnologies = styled.div`
  //border: 2px solid blue;
  height: auto;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  background: rgb(35, 30, 53);
  background: linear-gradient(
    180deg,
    rgba(35, 30, 53, 1) 5%,
    rgba(74, 55, 77, 1) 20%,
    rgba(35, 30, 53, 1) 40%
  );
  @media (min-width: 992px) {
    height: calc(100vh - 60px);
    grid-template-columns: 1fr 1fr 1fr;
    background: rgb(35, 30, 53);
    background: linear-gradient(
      90deg,
      rgba(35, 30, 53, 1) 5%,
      rgba(74, 55, 77, 1) 31%,
      rgba(35, 30, 53, 1) 60%
    );
  }
`;

function ContainerCampo({ title }) {
  return (
    <Container className="animate__animated animate__zoomIn">
      <h2>{title}</h2>
      <ContainerCards>
        <CardTecnologia />
        <CardTecnologia />
        <CardTecnologia />
        <CardTecnologia />
        <CardTecnologia />
        <CardTecnologia />
      </ContainerCards>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  h2 {
    text-align: center;
    color: white;
    //border: 1px solid gray;
    padding: 1rem;
  }
`;

const ContainerCards = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;

function CardTecnologia() {
  return <Card />;
}

const Card = styled.div`
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #8b8b8b;
  border-radius: 1rem;
  transition: all 0.3s;
  &:hover {
    transform: scale(0.95);
  }
`;
