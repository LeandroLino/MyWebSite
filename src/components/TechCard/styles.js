import styled from "styled-components";

const Container = styled.div`
  width: 110px;
  height: 110px;

  @media screen and (max-width: 350px) {
    width: 90px;
    height: 90px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > img {
    width: 80px;
    height: 80px;
    @media screen and (max-width: 800px) {
      width: 70px;
      height: 70px;
    }
    @media screen and (max-width: 450px) {
      width: 60px;
      height: 60px;
    }
  }
  font-size: 1em;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 100;

  cursor: pointer;
  :hover {
    background-color: #464646;
    border-radius: 5px;
  }
  transition: background-color 0.2s;
`;

export default Container;
