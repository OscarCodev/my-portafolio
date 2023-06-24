import React from "react";
import styled from "styled-components";
import proyect1 from "../../assets/proyect1.jpg";

function ExperienceScreen() {
  const data = ["NotesPro", "meditateMe", "pokeRank", "E-comerce"];
  return (
    <ContainerExperience transition-style="in:circle:top-right">
      <div className="containerBoton"></div>
      <div className="containerInfo">
        <div className="containerNameImage">

        </div>
        <div className="containerDescription">

        </div>
      </div>
      <div className="containerBoton"></div>
    </ContainerExperience>
  );
}

export default ExperienceScreen;

const ContainerExperience = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: calc(100vh - 120px);
  background-color: #231e35;
  border: 1px solid white;
  .containerBoton{
    height: calc(100vh - 120px);
    width: 50px;
    background-color: coral;
  }
  .containerInfo{
    height: calc(100vh - 120px);
    flex-grow: 1;
    background-color: cornflowerblue;

    display: flex;
    flex-direction: column;
    .containerNameImage{
      width: 100%;
      height: 50%;
      background-color: blue;
    }
    .containerDescription{
      width: 100%;
      height: 50%;
      background-color: yellow;
    }
  }
  @media (min-width: 992px) {
    height: calc(100vh - 60px); 
    .containerBoton, .containerInfo{
      height: calc(100vh - 60px)
    }

    .containerInfo{
      flex-direction: row;
      .containerNameImage{
        width: 50%;
        height: 100%;
      }
      .containerDescription{
        width: 50%;
        height: 100%;
      }
    }
  }
`;

