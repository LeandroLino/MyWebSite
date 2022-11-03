import GetLocation from "./components/GetLocation";
import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer";
import Home from "./pages/Home";
import Amor from "./pages/Amor";
import { Route, Routes, BrowserRouter as Router, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState({})
  return (
    <div>
      <Router>
      <GetLocation setLocation={setLocation}/>
        {location.pathname != "/amor" && 
          <>
            <Header />
            <SideDrawer />
          </>}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/amor" element={<Amor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
