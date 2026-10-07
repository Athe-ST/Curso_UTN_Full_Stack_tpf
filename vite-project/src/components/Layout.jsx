import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout() {
  return (
    <div className="app-layout">
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/541139189977?text=Hola,%20necesito%20hacer%20una%20consulta%20legal."
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat de WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;