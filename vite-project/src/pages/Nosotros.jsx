import { Link } from 'react-router-dom';

function Nosotros() {
  return (
    <main className="main-section">
      <section>
        <h1 className="page-title">
          Defendemos tus derechos en CABA y Provincia
        </h1>

        <p className="p">
          En <strong>Mendez Vedia & Asociados</strong> brindamos asesoramiento
          legal integral tanto en la <strong>Capital Federal (CABA)</strong>{' '}
          como en la <strong>Provincia de Buenos Aires</strong>. Nos
          especializamos en la resolución de conflictos complejos, desde{' '}
          <strong>urgencias penales</strong> (excarcelaciones y defensas) hasta{' '}
          <strong>litigios laborales</strong> (despidos, trabajo no registrado
          y accidentes de trabajo).
        </p>

        <p className="p">
          Nuestro enfoque combina la solidez técnica con una estrategia
          personalizada. Entendemos que detrás de cada expediente hay una
          persona que necesita no solo respuestas claras, sino también
          soluciones. Por eso, aseguramos siempre un{' '}
          <strong>
            análisis personalizado y detallado de los casos que recibimos
          </strong>
          .
        </p>

        <p className="p">
          Ya sea que enfrentes una causa penal o un conflicto laboral, si
          buscas abogados que se comprometan con tu situación, nuestro equipo
          tiene la trayectoria para defender tus derechos ante la Justicia
          Nacional y Provincial.
        </p>

        <Link className="btn btn-primary" to="/servicios">
          Ver más
        </Link>
      </section>
    </main>
  );
}

export default Nosotros;