import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderSup>
        <ContainerHeader>
            <Text>oscarDev</Text>
        </ContainerHeader>
    </HeaderSup>
  )
}

const HeaderSup = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background: #fff;
`;

const ContainerHeader = styled.div`
  width: 100%;
  height: 60px;
  background: #F9F9F9;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 992px){
    min-width: 992px;
    max-width: 1366px;
  }
`;

const Text = styled.h1`
  font-family: 'JetBrains Mono';
  font-size: 1.5rem;
  font-weight: bolder;
  color: #231e35;
`