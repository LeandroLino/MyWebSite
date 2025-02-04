import GetLocation from "./components/GetLocation";
import Header from "./components/Header";
import Home from "./pages/Home";
import Taxs from "./pages/Taxs";
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
          </>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/juros" element={<Taxs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
