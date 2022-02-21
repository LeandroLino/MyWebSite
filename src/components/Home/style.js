import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;

  background-color: #262626;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

Container.Name = styled.div`
  padding-left: 80px;
  @media screen and (max-width: 620px) {
    padding-left: 50px;
    border-left: 0;
  }

  border-left: 5px solid #fcba03;
  display: flex;
  flex-direction: column;
  > h1 div {
    height: 55px;
  }
  > h1:first-child {
    @media screen and (max-width: 320px) {
      font-size: 3em;
    }
    font-size: 4em;
    > div:not(:first-child) {
      @media screen and (max-width: 320px) {
        padding-left: 100px;
      }
      padding-left: 135px;
    }
  }
  > h1:not(:first-child) {
    font-weight: 100;
  }
`;

export default Container;
