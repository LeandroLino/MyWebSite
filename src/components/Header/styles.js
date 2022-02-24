import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100vw;
  height: 77px;
  background-color: ${(props) => (props.navBar ? "#111" : " #222")};
  transition: background-color 0.5s;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  > nav ul {
    display: flex;
    justify-content: space-around;
    width: 30%;
    > li {
      list-style: none;
      > a {
        text-decoration: none !important;
      }
    }
  }
`;

HeaderContainer.Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1300px) {
    margin-left: -65px;
  }
  @media screen and (max-width: 750px) {
    margin-left: 0;
  }
  @media screen and (max-width: 720px) {
    margin-left: 25px;
  }
  @media screen and (max-width: 450px) {
    margin-left: 35px;
  }

  width: 25%;
  height: 100%;

  font-family: "Poppins", sans-serif;
  color: #fff;
  > h1 {
    margin: 0;

    height: 70%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  > div {
    color: #fcba03;
    font-size: 1.3em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default HeaderContainer;
