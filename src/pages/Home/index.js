import HomeScreen from "components/Home";
import About from "components/About";
import Technologies from "components/Technologies";
import Carroussel from "components/Carroussel";

const Home = ({ children }) => {
  return (
    <>
      <HomeScreen />
      <About />
      <Technologies />
      <Carroussel />
    </>
  );
};

export default Home;
