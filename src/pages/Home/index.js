import HomeScreen from "components/Home";
import About from "components/About";
import Technologies from "components/Technologies";
import Carroussel from "components/Carroussel";
import SideDrawer from "components/SideDrawer";

const Home = ({ children }) => {
  return (
    <>
      <SideDrawer />
      <HomeScreen />
      <About />
      <Technologies />
      <Carroussel />
    </>
  );
};

export default Home;
