import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 24px;
  background: #262626;
  min-height: 100vh;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  color: #fcba03;
  font-size: 2.5em;
  margin-top: 24px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Subtitle = styled.h3`
  color: #fff;
  font-size: 1.5em;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const ContentCard = styled.div`
  background: #333;
  border-radius: 8px;
  padding: 24px;
  margin: 24px auto;
  max-width: 800px;
`;

export const SectionTitle = styled.h2`
  color: #fcba03;
  font-size: 1.8em;
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const Highlight = styled.span`
  color: #fcba03;
  font-weight: bold;
`;

export const Code = styled.span`
  color: #fcba03;
  background: #444;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: "Courier New", monospace;
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
`;

export const TechItem = styled.div`
  color: #fcba03;
  background: #444;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  font-family: "Courier New", monospace;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 1em;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;

  background: ${({ primary }) => (primary ? "#fcba03" : "transparent")};
  color: ${({ primary }) => (primary ? "#282828" : "#fcba03")};
  border: ${({ primary }) => (primary ? "none" : "1px solid #fcba03")};

  &:hover {
    background: ${({ primary }) => (primary ? "#e0a903" : "#444")};
    transform: translateY(-2px);
  }
`;