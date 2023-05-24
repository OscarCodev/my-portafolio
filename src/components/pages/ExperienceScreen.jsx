import React from "react";
import styled from "styled-components";

function ExperienceScreen() {
  return <ContainerExperience></ContainerExperience>;
}

export default ExperienceScreen;

const ContainerExperience = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  background: rgb(35, 30, 53);
  background: linear-gradient(
    90deg,
    rgba(35, 30, 53, 1) 0%,
    rgba(102, 102, 82, 1) 40%,
    rgba(35, 30, 53, 1) 74%
  );
  @media (min-width: 992px) {
    height: calc(100vh - 60px);
  }
`;
