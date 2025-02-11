import React from "react";
import { RocketOutlined, MailOutlined } from "@ant-design/icons";
import {
  AboutContainer,
  Header,
  Title,
  Subtitle,
  ContentCard,
  SectionTitle,
  Paragraph,
  Highlight,
  Code,
  TechGrid,
  TechItem,
  Actions,
  ActionButton,
} from "./styles";

const About = () => {
  return (
    <AboutContainer>
      {/* Cabeçalho */}
      <Header>
        <Title>Leandro Lino</Title>
        <Subtitle>Desenvolvedor | Transformando Ideias em Realidade com Tecnologia</Subtitle>
      </Header>

      {/* Seção "Sobre Mim" */}
      <ContentCard>
        <SectionTitle>Sobre Mim</SectionTitle>
        <Paragraph>
          Olá! Meu nome é Leandro Lino, tenho 22 anos. <br />
          Sou um Desenvolvedor Full Stack com experiência sólida em diversas tecnologias e metodologias. Minha
          paixão por tecnologia me motiva a buscar constantemente novos desafios e aprimorar minhas habilidades.
        </Paragraph>
        <Paragraph>
          Meu trabalho é <Highlight>transformar ideias em realidade</Highlight>, utilizando tecnologia para
          criar soluções inovadoras e eficientes. No <Highlight>Front-end</Highlight>, tenho expertise em{" "}
          <Code>JavaScript</Code>, <Code>React</Code>, e <Code>Vue.js</Code>, criando interfaces modernas e
          responsivas. No <Highlight>Back-end</Highlight>, domino <Code>Node.js</Code>, <Code>Python</Code>,{" "}
          <Code>Django</Code>, e <Code>Clojure</Code>, desenvolvendo aplicações robustas e escaláveis.
        </Paragraph>
        <Paragraph>
          Também possuo experiência em <Highlight>Banco de Dados</Highlight> como <Code>MySQL</Code>,{" "}
          <Code>PostgreSQL</Code>, e <Code>MongoDB</Code>, além de metodologias ágeis como <Code>SCRUM</Code>.
        </Paragraph>
      </ContentCard>

      {/* Lista de Tecnologias */}
      <ContentCard>
        <SectionTitle>Tecnologias que Domino</SectionTitle>
        <TechGrid>
          {[
            "Clojure",
            "JavaScript",
            "React",
            "Vue.js",
            "Node.js",
            "Python",
            "Django",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
          ].map((tech) => (
            <TechItem key={tech}>{tech}</TechItem>
          ))}
        </TechGrid>
      </ContentCard>

      {/* Experiência Profissional */}
      <ContentCard>
        <SectionTitle>Experiência Profissional</SectionTitle>
        <Paragraph>
          <Highlight>Global TI Tecnologia em Negócios</Highlight> - Back-end Developer (Janeiro 2024 - Presente)
          <br />
          Atuação em desenvolvimento back-end com Clojure, alocado na Nubank, lidando com plataforma de
          integrações.
        </Paragraph>
        <Paragraph>
          <Highlight>Outsmart Digital</Highlight> - Desenvolvedor Full Stack (Abril 2022 - Maio 2023)
          <br />
          Desenvolvimento de produtos digitais com foco em scale-ups, utilizando Clojure e Datomic.
        </Paragraph>
        <Paragraph>
          <Highlight>Easy Delivery</Highlight> - Desenvolvedor Full Stack (Junho 2021 - Fevereiro 2022)
          <br />
          Desenvolvimento de um sistema de gestão de restaurantes com Vue, Node e React.
        </Paragraph>
      </ContentCard>

      {/* Chamada para Ação */}
      <Actions>
        <ActionButton href="#projects" primary>
          <RocketOutlined />
          Ver Projetos
        </ActionButton>
        <ActionButton href="#contact">
          <MailOutlined />
          Entre em Contato
        </ActionButton>
      </Actions>
    </AboutContainer>
  );
};

export default About;