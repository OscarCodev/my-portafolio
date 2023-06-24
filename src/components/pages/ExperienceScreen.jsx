import React from "react";
import styled from "styled-components";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import proyecto1 from "../../assets/proyect1.jpg";

function ExperienceScreen() {
  const data = ["NotesPro", "meditateMe", "pokeRank", "E-comerce"];
  return (
    <ContainerExperience transition-style="in:circle:top-right">
      <div className="containerBoton">
        <Button>
          <MdNavigateBefore />
        </Button>
      </div>
      <div className="containerInfo animate__animated animate__zoomIn">
        <div className="containerNameImage">
          <p>proyect 1/5</p>
          <h2>meditateMe</h2>
          <img src={proyecto1} alt="proyect" />
        </div>
        <div className="containerDescription">
          <h2>Description: </h2>
          <p>
            Este proyecto administra las problematicas de organizacion en un
            determinado proyecto de investigacion o un proyecto de software
          </p>
          <h2>Tecnologias: </h2>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>

          <h2>Live: </h2>
          <button>Live</button>
        </div>
      </div>
      <div className="containerBoton">
        <Button>
          <MdNavigateNext />
        </Button>
      </div>
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
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  //border: 1px solid white;
  .containerBoton {
    //border: 1px solid white;
    height: calc(100vh - 120px);
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .containerInfo {
    //border: 1px solid cornflowerblue;
    height: calc(100vh - 120px);
    flex-grow: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    .containerNameImage {
      //border: 1px solid blue;
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      //justify-content: center;
      justify-content: flex-end;
      padding: 1rem;
      p,
      h2 {
        color: white;
        text-align: center;
      }
      h2 {
        margin: 1rem;
        font-size: 1.5rem;
      }
      img {
        width: 100%;
        max-width: 566px;
      }
    }
    .containerDescription {
      //border: 1px solid yellow;
      width: 100%;
      height: 50%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      //justify-content: center;
      justify-content: flex-start;
      h2 {
        padding: 0.3rem 0;
        font-size: 1.1rem;
        color: #e0e0e0;
      }

      p {
        color: #919191;
      }
      button {
        width: 80px;
      }
    }
  }
  @media (min-width: 992px) {
    height: calc(100vh - 60px);
    padding-left: 2rem;
    padding-right: 2rem;
    .containerBoton,
    .containerInfo {
      height: calc(100vh - 60px);
    }

    .containerInfo {
      flex-direction: row;
      .containerNameImage {
        width: 50%;
        height: 100%;
        justify-content: center;
      }
      .containerDescription {
        width: 50%;
        height: 100%;
        justify-content: center;
        h2 {
          padding: 1.5rem 0;
        }
      }
    }
  }
`;

const Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:active {
    scale: 0.95;
  }
`;
