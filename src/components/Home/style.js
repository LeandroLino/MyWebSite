import styled from "styled-components";

// Variáveis de cor
const colors = {
  primary: "#fcba03",
  background: "#262626",
  text: "#fff",
  textLight: "rgba(255, 255, 255, 0.8)",
};

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 77px);
  max-width: 100%;
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colors.text};
  font-family: "Poppins", sans-serif;
  position: relative;
`;

Container.Name = styled.div`
  padding-left: 80px;
  border-left: 5px solid ${colors.primary};
  display: flex;
  flex-direction: column;
  text-align: left;

  > h1 {
    margin: 0;
    font-size: 4em;
    line-height: 1.2;

    > div {
      height: 55px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateX(10px); /* Efeito de hover sutil */
      }

      &:not(:first-child) {
        padding-left: 135px;
      }
    }

    @media screen and (max-width: 620px) {
      font-size: 3em;

      > div:not(:first-child) {
        padding-left: 100px;
      }
    }
  }

  > h2 {
    font-size: 1.5em;
    font-weight: 100;
    margin-top: 10px;
    color: ${colors.textLight};
  }

  > p {
    font-size: 1.2em;
    font-weight: 300;
    margin-top: 10px;
    color: ${colors.textLight};
    max-width: 600px;
  }

  @media screen and (max-width: 620px) {
    padding-left: 50px;
    border-left: 0;
  }
`;

Container.Actions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;

  > a {
    text-decoration: none;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      background-color: ${colors.primary};
      color: ${colors.background};
      transform: translateY(-3px); /* Efeito de levitação */

      /* Efeito de hover no ícone */
      .icon {
        transform: scale(1.2); /* Aumenta o ícone */
      }
    }

    .icon {
      transition: transform 0.3s ease;
    }
  }
`;

Container.ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: ${colors.textLight};
  font-size: 0.9em;
  animation: bounce 2s infinite;

  .arrow {
    width: 20px;
    height: 20px;
    border: 2px solid ${colors.primary};
    border-left: 0;
    border-top: 0;
    transform: rotate(45deg);
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

export default Container;