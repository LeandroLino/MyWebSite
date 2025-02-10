import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 77px;
  background-color: ${(props) => (props.navBar ? "#111" : "rgb(34, 34, 34)")};
  transition: background-color 0.5s;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding-left: 40px; /* Distância agradável da borda esquerda */
  border-bottom: 2px solid rgb(252, 186, 3);
  z-index: 1000;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  margin: 0;
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: baseline; /* Alinha o texto na base */
`;

export const MainText = styled.span`
  font-size: 2.8rem; /* Tamanho maior para "Lino" */
`;

export const SubText = styled.span`
  font-size: 1.5rem; /* Tamanho menor para ".dev.br" */
  color: rgb(252, 186, 3); /* Cor laranja padrão */
  font-weight: 300; /* Fonte mais fina */
  margin-left: 0; /* Espaçamento entre "Lino" e ".dev.br" */
`;