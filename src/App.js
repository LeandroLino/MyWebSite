import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer";
import Home from "./pages/Home";

function App() {
  console.error(
    "%c O que você busca por aqui?",
    "font-size: 50px; text-transform: uppercase; color: white; text-shadow: 2px 2px red, 4px 4px orange, 6px 6px yellow, 8px 8px green, 10px 10px blue, 12px 12px purple;"
  );
  return (
    <div>
      <Header />
      <SideDrawer />
      <Home />
    </div>
  );
}

export default App;
