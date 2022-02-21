import HomeScreen from "components/Home";
import About from "components/About";

const Home = ({ children }) => {
  return (
    <>
      <HomeScreen />
      <About />
    </>
  );
};

export default Home;
