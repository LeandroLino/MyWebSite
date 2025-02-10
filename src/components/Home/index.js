import Container from "./style";

const HomeScreen = () => {
  return (
    <Container>
      <Container.Name>
  <h1>
    <div>Leandro</div>
    <div>Lino</div>
  </h1>
  <h2>
    Transformando ideias em código, uma linha de cada vez.
  </h2>
  <p>
    Desenvolvedor Full Stack em constante evolução, buscando criar soluções modernas e eficientes.
  </p>
  <Container.Actions>
  <a href="#projects">
    <span className="icon">🚀</span>
    Ver Projetos
  </a>
  <a href="#contact">
    <span className="icon">✉️</span>
    Entre em Contato
  </a>
</Container.Actions>
</Container.Name>
      <Container.ScrollIndicator>
        <span>Veja mais!</span>
        <div className="arrow"></div>
      </Container.ScrollIndicator>
    </Container>
  );
};

export default HomeScreen;