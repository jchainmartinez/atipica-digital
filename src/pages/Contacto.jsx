import { useState } from 'react';
import './PageShared.css';
import './Contacto.css';

const redes = [
  {
    nombre: 'Facebook',
    icono: '📘',
    url: '#',
    handle: '@AtipicaDigital',
  },
  {
    nombre: 'Instagram',
    icono: '📸',
    url: '#',
    handle: '@AtipicaDigital',
  },
  {
    nombre: 'WhatsApp',
    icono: '💬',
    url: '#',
    handle: 'Escríbenos',
  },
  {
    nombre: 'TikTok',
    icono: '🎵',
    url: '#',
    handle: '@AtipicaDigital',
  },
];

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrar Formspree o servicio de email
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__tag">Contacto</span>
          <h1>
            Hablemos de tu{' '}
            <span className="text-gradient">próximo proyecto</span>
          </h1>
        </div>
      </section>

      {/* UBICACIÓN + COBERTURA */}
      <section className="section">
        <div className="container contacto-top">
          <div className="contacto-mapa">
            {/* Placeholder: reemplazar src con el embed real de Google Maps */}
            <div className="mapa-placeholder">
              <span>📍</span>
              <p>Ubicación en Maps</p>
              <small>Pendiente de coordenadas reales</small>
            </div>
          </div>
          <div className="contacto-cobertura">
            <span className="contacto-cobertura__icono"></span>
            <h2>Atendemos en toda la República Mexicana</h2>
            <p>
              Aunque somos del oriente de Tlaxcala, trabajamos con marcas
              de norte a sur del país. La distancia no es excusa para no
              tener una presencia digital que se note.
            </p>
          </div>
        </div>
      </section>

      {/* REDES SOCIALES */}
      <section className="section contacto-redes-seccion">
        <div className="container">
          <h2 className="section-title">Encuéntranos en</h2>
          <div className="redes-grid">
            {redes.map((red) => (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className="red-card"
              >
                <span className="red-card__icono">{red.icono}</span>
                <span className="red-card__nombre">{red.nombre}</span>
                <span className="red-card__handle">{red.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </section >

      {/* FORMULARIO */}
      < section className="section" >
        <div className="container">
          <h2 className="section-title">
            Solicita una <span className="text-gradient">cotización</span>
          </h2>
          <p className="contacto-form-lead">
            Cuéntanos qué necesitas y te respondemos a la brevedad.
          </p>
          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="contacto-form__row">
              <label>
                Nombre completo
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </label>
              <label>
                Empresa / Negocio
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa (opcional)"
                />
              </label>
            </div>
            <div className="contacto-form__row">
              <label>
                Correo electrónico
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </label>
              <label>
                Teléfono / WhatsApp
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Tu número de contacto"
                />
              </label>
            </div>
            <label>
              Servicio de interés
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un servicio</option>
                <option>Marketing Digital</option>
                <option>Diseño Gráfico</option>
                <option>Campañas con Meta Ads</option>
                <option>Publicidad Impresa</option>
                <option>Marketing de Eventos</option>
                <option>Branding</option>
                <option>Producción Audiovisual</option>
                <option>Redes Sociales</option>
                <option>Cursos</option>
                <option>IA</option>
                <option>SEO</option>
                <option>Desarrollo de Páginas Web</option>
                <option>Invitaciones Digitales</option>
              </select>
            </label>
            <label>
              Cuéntanos más
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="¿Qué necesitas? Entre más detalle, mejor te podemos orientar..."
                rows="5"
                required
              ></textarea>
            </label>
            <button type="submit" className="btn btn--primary">
              Enviar solicitud
            </button>
          </form>
        </div>
      </section >

      {/* DIRECTOR GENERAL */}
      < section className="section contacto-director" >
        <div className="container contacto-director__inner">
          <div className="director-card">
            <div className="director-card__avatar">IR</div>
            <div className="director-card__info">
              <span className="director-card__titulo">Director General</span>
              <h3 className="director-card__nombre">
                L.D.G. / L.I.N.M. Isabel Ríos Paredes
              </h3>
              <p className="director-card__desc">
                Licenciada en Diseño Gráfico y Licenciada en Innovación
                de Negocios y Mercadotecnia — fundadora de Atípica Digital.
              </p>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}

export default Contacto;
