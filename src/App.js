import Header from "./components/Header";
import Home from "./pages/Home";
import Taxs from "./pages/Taxs";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState({});

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/juros" element={<Taxs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;