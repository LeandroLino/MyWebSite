import { motion } from "framer-motion"; // Importe o framer-motion
import Container from "./style";

const HomeScreen = () => {
  // Variantes de animação para o nome
  const nameVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }, // Estado final (visível)
  };

  return (
    <Container>
      <Container.Name>
        <motion.h1
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          <div>Leandro</div>
          <div>Lino</div>
        </motion.h1>
        <h2>
          Transformando ideias em código, uma linha de cada vez.
        </h2>
        <p>
          Transformo ideias em código, criando soluções digitais que unem tecnologia e funcionalidade.
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