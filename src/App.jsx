import { styled } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/uis/Header";
import Container from "./components/uis/Container";

export default function MyPortafolioApp() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ContainerGlobal>
        <Header/>
        <Container/>
      </ContainerGlobal>
    </BrowserRouter>
  );
}

const ContainerGlobal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;




