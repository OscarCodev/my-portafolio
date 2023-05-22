import React from 'react'
import styled from 'styled-components'
import RoutesConfig from '../../RoutesConfig';

//En este componente mostramos las pantallas

export default function ViewPages() {
  return (
    <Principal>
        <RoutesConfig/>
    </Principal>
  )
}


const Principal = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 4px solid coral;
  @media (min-width: 992px){
    flex-grow: 1;
  }
`;

