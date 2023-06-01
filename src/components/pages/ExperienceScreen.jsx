import React from "react";
import styled from "styled-components";
import proyect1 from "../../assets/proyect1.jpg";

function ExperienceScreen() {
  return (
    <ContainerExperience transition-style="in:circle:top-right">
      <ContainerProyect>
        <h2>Notes Pro</h2>
        <div className="containerInfo">
          <div className="containerImg">
            <img src={proyect1} alt="img" />
          </div>
          <div className="containerTecnologias">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="containerButtons">
            <div className="buttonRepo"></div>
            <div className="buttonLive">Live</div>
          </div>
        </div>
      </ContainerProyect>
      <ContainerProyect>
        <h2>Notes Pro</h2>
        <div className="containerInfo">
          <div className="containerImg">
            <img src={proyect1} alt="img" />
          </div>
          <div className="containerTecnologias">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="containerButtons">
            <div className="buttonRepo"></div>
            <div className="buttonLive">Live</div>
          </div>
        </div>
      </ContainerProyect>
      <ContainerProyect>
        <h2>Notes Pro</h2>
        <div className="containerInfo">
          <div className="containerImg">
            <img src={proyect1} alt="img" />
          </div>
          <div className="containerTecnologias">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="containerButtons">
            <div className="buttonRepo"></div>
            <div className="buttonLive">Live</div>
          </div>
        </div>
      </ContainerProyect>
      <ContainerProyect>
        <h2>Notes Pro</h2>
        <div className="containerInfo">
          <div className="containerImg">
            <img src={proyect1} alt="img" />
          </div>
          <div className="containerTecnologias">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="containerButtons">
            <div className="buttonRepo"></div>
            <div className="buttonLive">Live</div>
          </div>
        </div>
      </ContainerProyect>
      <ContainerProyect>
        <h2>Notes Pro</h2>
        <div className="containerInfo">
          <div className="containerImg">
            <img src={proyect1} alt="img" />
          </div>
          <div className="containerTecnologias">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="containerButtons">
            <div className="buttonRepo"></div>
            <div className="buttonLive">Live</div>
          </div>
        </div>
      </ContainerProyect>
      <ContainerProyect>
        <h2>Notes Pro</h2>
        <div className="containerInfo">
          <div className="containerImg">
            <img src={proyect1} alt="img" />
          </div>
          <div className="containerTecnologias">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="containerButtons">
            <div className="buttonRepo"></div>
            <div className="buttonLive">Live</div>
          </div>
        </div>
      </ContainerProyect>
      <ContainerProyect>
        <h2>Notes Pro</h2>
        <div className="containerInfo">
          <div className="containerImg">
            <img src={proyect1} alt="img" />
          </div>
          <div className="containerTecnologias">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="containerButtons">
            <div className="buttonRepo"></div>
            <div className="buttonLive">Live</div>
          </div>
        </div>
      </ContainerProyect>
    </ContainerExperience>
  );
}

export default ExperienceScreen;

const ContainerExperience = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 3rem;
  gap: 3rem;
  width: 100%;
  height: auto;
  background-color: #231e35;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ContainerProyect = styled.div`
  width: 100%;
  height: 300px;
  //border: 1px solid red;
  font-family: "JetBrains Mono";
  h2 {
    color: white;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .containerInfo {
    //border: 1px solid white;
    border-radius: 1rem;
    transition: all 0.3s;
    &:hover {
      transform: scale(0.99);
    }
  }
  .containerImg {
    width: 100%;
    height: 170px;
    img {
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
      width: 100%;
      height: 100%;
    }
  }
  .containerTecnologias {
    width: 100%;
    height: 50px;
    background-color: #353535;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    .item {
      width: 35px;
      height: calc(40px - 0.5rem);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 0.5rem;
    }
  }
  .containerButtons {
    width: 100%;
    height: 50px;
    background-color: #1e1e1e;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .buttonRepo {
      width: 35px;
      height: calc(40px - 0.5rem);
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 0.5rem;
    }
    .buttonLive {
      width: 100px;
      height: calc(40px - 0.5rem);
      background-color: coral;
      border-radius: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
`;
