import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > div:first-child {
    font-family: "Poppins", sans-serif;
    font-weight: 1000;
    color: #fc9003;
    font-size: 3em;
  }
`;

Container.Item = styled.div`
  width: 50%;
  height: 50%;
  background-color: #fff;
  @media screen and (max-width: 900px) {
    width: 65%;
    height: 55%;
  }
  @media screen and (max-width: 750px) {
    height: 45%;
  }
  @media screen and (max-width: 600px) {
    width: 75%;
  }
  @media screen and (max-width: 450px) {
    height: 35%;
  }
  @media screen and (max-width: 350px) {
    height: 25%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #262626;

  position: relative;
  bottom: 0;
  > span {
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    user-select: none;
    width: 5%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(38, 38, 38, 0.3);
    :hover {
      background-color: rgba(38, 38, 38, 0.5);
    }
    transition: background-color 0.2s;
    cursor: pointer;
  }
  > span:first-child {
    > img {
      transform: rotate(-180deg);
    }
    position: absolute;
    left: 0;
    z-index: 5;
  }
  > span:last-child {
    position: absolute;
    right: 0;
  }

  > .Name {
    position: absolute;
    bottom: 15px;
    z-index: 5;
    color: #fcba03;
    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
  }
  > img {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  .Secondary {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .Primary {
    animation: 1.5s slidein;
    @keyframes slidein {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }
  font-size: 1.2em;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;
`;

export default Container;
