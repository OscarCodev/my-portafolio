import React from "react";
import styled from "styled-components";

function ExperienceScreen() {
  return (
    <ContainerExperience transition-style="in:circle:top-right"></ContainerExperience>
  );
}

export default ExperienceScreen;

const ContainerExperience = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  background: rgb(35, 30, 53);
  background: linear-gradient(
    180deg,
    rgba(35, 30, 53, 1) 5%,
    rgba(70, 70, 56, 0.5) 20%,
    rgba(35, 30, 53, 1) 40%
  );
  @media (min-width: 992px) {
    height: calc(100vh - 60px);
    background: rgb(35, 30, 53);
    background: linear-gradient(
      90deg,
      rgba(35, 30, 53, 1) 0%,
      rgba(70, 70, 56, 0.7) 29%,
      rgba(35, 30, 53, 1) 63%
    );
  }
`;
