function Card({ titulo, descripcion, imagen, enlace }) {
  return (
    <article className="card">
      {imagen && <img src={imagen} alt={titulo} />}

      <div className="card-body">
        <h3>{titulo}</h3>

        <p>{descripcion}</p>

        {enlace && (
          <a
            href={enlace}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar
          </a>
        )}
      </div>
    </article>
  );
}

export default Card;