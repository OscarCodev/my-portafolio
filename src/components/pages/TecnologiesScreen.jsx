import React from "react";
import styled from "styled-components";
import { dataTecnologias } from "../../data/dataTecnologias";

export default function TecnologiesScreen() {
  /*
  const frontend = dataTecnologias[0];
  const backend = dataTecnologias[1];
  const mobile = dataTecnologias[2];

  const { categoriaPrincipal, basic, design, libraries, state, animation } =
    frontend;
  const {
    categoriaPrincipal: categoriaBackend,
    main,
    database,
    frameworks,
  } = backend;
  const {
    categoriaPrincipal: categoriaMobil,
    main: mainMobile,
    state: stateMobile,
    libraries: librariesMobile,
    animation: animationMobile,
  } = mobile;
  */

  const sections = [
    { data: dataTecnologias[0], title: 'categoriaPrincipal', keys: ['basic', 'design', 'libraries', 'state', 'animation'] },
    { data: dataTecnologias[1], title: 'categoriaPrincipal', keys: ['main', 'database', 'frameworks'] },
    { data: dataTecnologias[2], title: 'categoriaPrincipal', keys: ['main', 'state', 'libraries', 'animation'] },
    
  ];

  return (
    <ContainerTecnologies transition-style="in:circle:top-right">
        {sections.map(({ data, title, keys }) => (
          <ContainerCampo key={data[title]} className="animate__animated animate__zoomIn">
            <h2>{data[title]}</h2>
            <div>
              {keys.map((key) => (
                <>
                  <p>{key}</p>
                  <GridItems>
                    {data[key].map((item) => (
                      <div className="card"key={item}>{item}</div>
                    ))}
                  </GridItems>
                </>
              ))}
            </div>
          </ContainerCampo>
        ))}
    </ContainerTecnologies>
  );
}

const ContainerTecnologies = styled.div`
  //border: 2px solid blue;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  background: rgb(35, 30, 53);
  padding: 1rem 0;
  background: linear-gradient(
    180deg,
    rgba(35, 30, 53, 1) 5%,
    rgba(74, 55, 77, 1) 20%,
    rgba(35, 30, 53, 1) 40%
  );
  @media (min-width: 992px) {
    min-height: calc(100vh - 60px);
    height: auto;
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

const ContainerCampo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  //border: 1px solid white;
  h2 {
    color: white;
    font-size: 1.5;
    margin: 2.5rem;
    border: 1px solid paleturquoise;
    padding: .5rem 2rem ;
    border-radius: 1rem;
  }
  p {
    font-size: 1rem;
    color: white;
    margin-bottom: 1rem;
    //margin-top: .5rem;
  }
  .card{
    width: 50px;
    margin-bottom: .5rem;
    height: 50px;
    border: 1px solid white;
    background-color: rgba(255,255,255,0.1);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 992px) {
    height: auto;
  }
`;

const GridItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;
