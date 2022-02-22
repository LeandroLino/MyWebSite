import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  max-width: 100%;

  background-color: #262626;

  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    > div:last-child {
      padding-left: 10px;
      color: #fff;
      font-family: "Poppins", sans-serif;
      font-weight: 1000;
    }
  }
  > div:first-child div:first-child {
    font-size: 3em;
    color: #fc9003;
    font-family: "Poppins", sans-serif;
    font-weight: 1000;
    @media screen and (max-width: 450px) {
      font-size: 2em;
    }
  }
  abbr[title] {
    cursor: pointer;
  }
  > div:last-child {
    width: 50%;
    @media screen and (max-width: 780px) {
      width: 70%;
    }
    @media screen and (max-width: 560px) {
      width: 80%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: row wrap;
  }
`;

Container.Icons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > div {
    margin: 10px;
    @media screen and (max-width: 490px) {
      margin: 5px;
    }
    @media screen and (max-width: 450px) {
      margin: 0;
    }
  }
`;

export default Container;
