import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";

import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Urgencias from "./pages/Urgencias";
import Contact from "./components/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/urgencias" element={<Urgencias />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
