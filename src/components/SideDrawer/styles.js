import styled from "styled-components";
import { ReactComponent as Linkedin } from "../../assets/Linkedin.svg";
import { ReactComponent as Github } from "../../assets/Github.svg";
import { ReactComponent as Gitlab } from "../../assets/Gitlab.svg";
import { ReactComponent as Email } from "../../assets/Email.svg";

const DrawerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: fixed;
  left: 0;
  top: 35vh;

  width: 38px;
  height: 155px;
  border-radius: 0 10px 10px 0;

  background-color: #fcba03;
`;
DrawerContainer.Linkedin = styled(Linkedin)`
  transform: rotate(-90deg);
  :hover {
    transform: rotate(0deg);
    fill: #fff;
    cursor: pointer;
  }
  transition: transform 0.5s, fill 0.7s;
  fill: #262626;
  width: 35px;
  height: 35px;
`;
DrawerContainer.Github = styled(Github)`
  transform: rotate(-90deg);
  :hover {
    transform: rotate(0deg);
    fill: #fff;
    cursor: pointer;
  }
  transition: transform 0.5s, fill 0.7s;
  fill: #262626;
  width: 35px;
  height: 35px;
`;

DrawerContainer.Gitlab = styled(Gitlab)`
  transform: rotate(-90deg);
  :hover {
    transform: rotate(0deg);
    fill: #fff;
    cursor: pointer;
  }
  transition: transform 0.5s, fill 0.7s;
  fill: #262626;
  width: 35px;
  height: 35px;
`;

DrawerContainer.Email = styled(Email)`
  transform: rotate(-90deg);
  :hover {
    transform: rotate(0deg);
    fill: #fff;
    cursor: pointer;
  }
  transition: transform 0.5s, fill 0.7s;
  fill: #262626;
  width: 32px;
  height: 32px;
  > path {
    fill: #262626;
    :hover {
      transform: rotate(0deg);
      fill: #fff;
      cursor: pointer;
    }
    transition: transform 0.5s, fill 0.2s;
  }
`;

export default DrawerContainer;
