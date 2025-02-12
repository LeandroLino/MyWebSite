import { lazy, Suspense } from "react";
import "./styles.css";

// Importações com lazy loading
const Contact = lazy(() => import("components/Contact"));
const HomeScreen = lazy(() => import("components/Home"));
const About = lazy(() => import("components/About"));
const Technologies = lazy(() => import("components/Technologies"));
const Carroussel = lazy(() => import("components/Carroussel"));

const Home = () => {
  return (
    <>
      {/* Conteúdo principal com fallback visível */}
      <main style={{ paddingTop: "77px" }}>
        <Suspense fallback={
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#222"
          }}>
            {/* Spinner de carregamento */}
            <div className="loader"></div>
          </div>
        }>
          {/* Renderize os componentes aqui */}
          <HomeScreen />
          <About />
          <Contact/>
          <Technologies />
          <Carroussel />
        </Suspense>
      </main>
    </>
  );
};

export default Home;