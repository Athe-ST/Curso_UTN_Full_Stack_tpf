function Gallery({ imagenes = [] }) {
  return (
    <div className="gallery">
      {imagenes.map((img, index) => (
        <img
          key={index}
          className="gallery-item"
          src={img.url}
          alt={img.alt || "Imagen ${index + 1}"}
        />
      ))}
    </div>
  );
}

export default Gallery;