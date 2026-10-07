import { useState } from 'react';

const initialState = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  reason: '',
  firstVisit: '',
  comment: ''
};

function Contact() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log('Cambio de campo:', name, 'Valor:', value);
    
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Datos enviados:', formData);

    alert('Mensaje enviado con éxito.');
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  return (
    <main>
      <h1 className="page-title">Contacto</h1>

      <section className="main-section">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Tu apellido"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="11 0000 0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="direccion@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Motivo de contacto</label>

            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="penal">Consulta penal</option>
              <option value="laboral">Consulta laboral</option>
              <option value="civil">Consulta civil</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <fieldset>
              <legend>¿Ya conocías MV&A Estudio Jurídico?</legend>

              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="firstVisit"
                    value="si"
                    checked={formData.firstVisit === 'si'}
                    onChange={handleChange}
                    required
                  />
                  Sí
                </label>

                <label>
                  <input
                    type="radio"
                    name="firstVisit"
                    value="no"
                    checked={formData.firstVisit === 'no'}
                    onChange={handleChange}
                    required
                  />
                  No
                </label>
              </div>
            </fieldset>
          </div>

          <div className="form-group">
            <label htmlFor="comment">Mensaje</label>

            <textarea
              id="comment"
              name="comment"
              placeholder="Contanos en qué te podemos ayudar."
              value={formData.comment}
              onChange={handleChange}
              cols="40"
              rows="6"
              required
            ></textarea>
          </div>

          <div className="form-buttons">
            <button className="btn btn-primary" type="submit">
              Enviar mensaje
            </button>

            <button className="btn btn-secondary" type="reset">
              Limpiar formulario
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;