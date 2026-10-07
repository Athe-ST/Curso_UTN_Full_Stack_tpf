import Gallery from "../components/Gallery";

import urgencia01 from "../assets/img/urgencia_01.png";
import urgencia02 from "../assets/img/urgencia_02.png";
import urgencia03 from "../assets/img/urgencia_03.png";
import urgencia04 from "../assets/img/urgencia_04.png";
import urgencia05 from "../assets/img/urgencia_05.png";
import urgencia06 from "../assets/img/urgencia_06.png";
import urgencia07 from "../assets/img/urgencia_07.png";
import urgencia08 from "../assets/img/urgencia_08.png";

const imagenes = [
  { url: urgencia01, alt: "Primera urgencia" },
  { url: urgencia02, alt: "Segunda urgencia" },
  { url: urgencia03, alt: "Tercera urgencia" },
  { url: urgencia04, alt: "Cuarta urgencia" },
  { url: urgencia05, alt: "Quinta urgencia" },
  { url: urgencia06, alt: "Sexta urgencia" },
  { url: urgencia07, alt: "Séptima urgencia" },
  { url: urgencia08, alt: "Octava urgencia" },
];

function Urgencias() {
  return (
    <main>
      <h1 className="page-title">ASISTENCIA JURÍDICA DE URGENCIA</h1>

      <p>Estamos disponibles las 24 horas para situaciones críticas.</p>

      <section className="main-section">
        <Gallery imagenes={imagenes} />
      </section>
    </main>
  );
}

export default Urgencias;