import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Estudio Jurídico integral</h1>

        <h2>CABA Y PROVINCIA</h2>

        <p>Defensa penal y laboral estratégica</p>

        <Link className="btn btn-primary" to="/servicios">
          Ver más
        </Link>
      </section>
    </main>
  );
}

export default Home;
