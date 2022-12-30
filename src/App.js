import GetLocation from "./components/GetLocation";
import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState({})
  return (
    <div>
      <Router>
      <GetLocation setLocation={setLocation}/>
          <>
            <Header />
            <SideDrawer />
          </>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
