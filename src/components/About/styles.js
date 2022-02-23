import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;

  background-color: #282828;

  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-family: "Poppins", sans-serif;

  > div {
    @media screen and (max-width: 900px) {
      width: 75%;
    }
    @media screen and (max-width: 750px) {
      width: 85%;
    }
    @media screen and (max-width: 620px) {
      margin-left: 25px;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    @media screen and (max-height: 980px) {
      width: 70%;
    }
    @media screen and (max-height: 1300px) {
      width: 80%;
    }
    margin-top: 15vh;
    @media screen and (max-width: 470px) {
      margin-top: 10vh;
    }
    @media screen and (max-width: 350px) {
      margin-top: 3vh;
    }
    > div:first-child {
      font-weight: 1000;
      color: #fc9003;
      font-size: 3em;
      @media (max-width: 850px) {
        @media (max-height: 550px) {
          font-size: 2.5em;
        }
      }
      @media (max-width: 710px) {
        @media (max-height: 550px) {
          margin-top: -25px;
          font-size: 2em;
        }
      }
      @media (max-width: 710px) {
        margin-top: -35px;
      }
      @media (max-width: 650px) {
        font-size: 1.5em;
        margin-top: -45px;
      }
      @media (max-width: 380px) {
        font-size: 1.3em;
        margin-top: -55px;
      }
      @media screen and (max-width: 600px) {
        font-size: 2.5em;
      }
      @media screen and (max-width: 560px) {
        font-size: 1.8em;
        margin-top: -15px;
      }
      @media screen and (max-width: 350px) {
        font-size: 1.5em;
      }
      @media screen and (max-width: 320px) {
        font-size: 1.2em;
      }
    }
    > div:last-child {
      display: flex;
      flex-direction: column;
      > p {
        @media screen and (max-width: 610px) {
          font-size: 1.1em;
        }
        @media screen and (max-width: 550px) {
          font-size: 1em;
        }
        @media screen and (max-width: 480px) {
          margin: 0;
        }
        @media screen and (max-width: 380px) {
          font-size: 0.9em;
          margin: 0.2em;
        }
        @media screen and (max-width: 320px) {
          margin: 0.4em;
          margin-bottom: 0;
        }
        margin: 0.5em;
        font-size: 1.2em;
      }
    }
  }
`;

export default Container;
