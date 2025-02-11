import React from "react";
import { MailOutlined, PhoneOutlined, LinkedinOutlined, GithubOutlined, WhatsAppOutlined } from "@ant-design/icons";
import {
  AboutContainer,
  Header,
  Title,
  Subtitle,
  ContentCard,
  SectionTitle,
  Paragraph,
  Highlight,
  Actions,
  ActionButton,
} from "./styles";

const Contact = () => {
  return (
    <AboutContainer>
      {/* Cabeçalho */}
      <Header>
        <Title>Contato</Title>
        <Subtitle>Entre em contato comigo para colaborações, oportunidades ou apenas para dizer olá!</Subtitle>
      </Header>

      {/* Chamada para Ação */}
      <ContentCard>
        <SectionTitle>Como Entrar em Contato</SectionTitle>
        <Paragraph>
          Você pode me contatar diretamente por e-mail, telefone ou através das minhas redes sociais. Estou sempre
          disponível para conversar sobre novos projetos, oportunidades ou até mesmo para trocar ideias!
        </Paragraph>
        <Actions>
          <ActionButton
            href="mailto:leandro.lino.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            primary
          >
            <MailOutlined />
            Enviar E-mail
          </ActionButton>
          <ActionButton
            href="https://wa.me/5511940596713"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppOutlined />
            Chamar no WhatsApp
          </ActionButton>
        </Actions>
      </ContentCard>

      {/* Informações de Contato */}
      <ContentCard>
        <SectionTitle>Informações de Contato</SectionTitle>
        <Paragraph>
          <Highlight>
            <LinkedinOutlined /> LinkedIn:
          </Highlight>{" "}
          <a
            href="https://www.linkedin.com/in/leandro-lino"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            linkedin.com/in/leandro-lino
          </a>
        </Paragraph>
        <Paragraph>
          <Highlight>
            <GithubOutlined /> GitHub:
          </Highlight>{" "}
          <a
            href="https://github.com/LeandroLino"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            github.com/LeandroLino
          </a>
        </Paragraph>
      </ContentCard>
    </AboutContainer>
  );
};

export default Contact;