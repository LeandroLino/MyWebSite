import HomeScreen from "components/Home";
import About from "components/About";
import Technologies from "components/Technologies";

const Home = ({ children }) => {
  return (
    <>
      <HomeScreen />
      <About />
      <Technologies />
    </>
  );
};

export default Home;
