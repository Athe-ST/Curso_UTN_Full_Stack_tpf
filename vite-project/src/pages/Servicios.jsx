import Card from "../components/Card";

import laboral from '../assets/img/laboral_cream-dark.jpg';
import penal from '../assets/img/penal_cream-dark.jpg';
import civil from '../assets/img/civil_cream-dark.jpg';

const whatsappLink =
  'https://wa.me/541139189977?text=Hola,%20necesito%20hacer%20una%20consulta%20legal.';

function Servicios() {
  return (
    <main>
      <h1 className="page-title">Conocé nuestros servicios</h1>

      <section className="main-section">
        <div className="cards-grid">
          <Card
            titulo="Derecho laboral"
            descripcion="Despidos, trabajo en negro (no registrado), conciliación laboral (SECLO), accidentes de trabajo (ART) y hostigamiento/acoso laboral."
            imagen={laboral}
            enlace={whatsappLink}
          />

          <Card
            titulo="Derecho penal"
            descripcion="Excarcelaciones, urgencias 24hr, etapa de instrucción y juicio oral, apelaciones, arrestos domiciliarios y habeas corpus."
            imagen={penal}
            enlace={whatsappLink}
          />

          <Card
            titulo="Derecho civil"
            descripcion="Sucesiones, divorcios y accidentes de tránsito."
            imagen={civil}
            enlace={whatsappLink}
          />
        </div>
      </section>
    </main>
  );
}

export default Servicios;
