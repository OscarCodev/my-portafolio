import React from "react";
import styled from "styled-components";
import imagenProgramador from "../../assets/Programer.jpg";

//Podemos maqueta como deseemos
export default function HomeScreen() {
  return (
    <ContainerPrincipal>
      <ContenedorIcons />
      <Presentacion>
        <h2>I'm Oscar Bautista</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum ab doloribus vel vitae voluptatibus vero fugit! Natus eius laudantium iure officiis odit quos, dolore omnis maiores sed saepe quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ipsa magni nulla expedita unde, laboriosam voluptatibus, ipsum ad quidem placeat mollitia. Alias, accusantium distinctio. Mollitia perferendis blanditiis ad nostrum rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe minus eum atque eos ad ratione ducimus nostrum, enim eaque non facere assumenda deserunt fugiat mollitia doloribus, beatae explicabo. Placeat, nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur numquam vel a quasi cumque beatae, nobis labore eaque quia qui repellendus aperiam et, facere illo iusto atque sint doloribus! lore
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptatum qui magnam harum nesciunt animi saepe beatae nam nihil, ea, modi a aperiam aspernatur molestias. Accusantium expedita architecto quas? Velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa iusto laborum reprehenderit et possimus non explicabo maxime nostrum iste ipsam animi accusamus nemo aperiam incidunt, eum culpa, labore magnam.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, illo repellat? Veniam, distinctio natus! Aperiam maiores similique voluptates sunt omnis, hic quaerat, id amet labore officia in dolore beatae quia!
        </p>
      </Presentacion>
      <ContenedorImg>
        
      </ContenedorImg>
    </ContainerPrincipal>
  );
}

//Necesariamente deben de tener este componente todas
//las pantallas
const ContainerPrincipal = styled.div`
  //flex-grow: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: yellow;
  border: 2px solid black;
  overflow-y: auto;
`;

const ContenedorIcons = styled.div`
  width: 200px;
  height: 30px;
  border: 3px solid cornflowerblue;
`;

const Presentacion = styled.div`
  flex-grow: 0.6;
  border: 3px solid green;
`;

const ContenedorImg = styled.div`
  flex-grow: 1;
  border: 3px solid yellow;
  img {
    width: 200px;
  }
`;
