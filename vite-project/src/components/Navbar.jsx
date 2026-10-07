import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/isologo-negativo.png';

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="imagen-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className="navlinks">
          <li><NavLink to="/nosotros">Nosotros</NavLink></li>
          <li><NavLink to="/servicios">Servicios</NavLink></li>
          <li><NavLink to="/urgencias">Urgencias</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
