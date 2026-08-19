import { Link } from 'react-router-dom';
import './Inicio.css';

function Inicio() {
  return (
    <div className="inicio">
      {/* HERO */}
      <section className="hero">
        <div className="hero__blob hero__blob--1"></div>
        <div className="hero__blob hero__blob--2"></div>

        <div className="container hero__inner">
          <span className="hero__tag">Marketing Digital</span>
          <h1 className="hero__title">
            Piensa <span className="text-gradient">Diferente</span>
          </h1>
          <p className="hero__subtitle">
            Marketing Digital,
            Trafickers Certificados,
            Campañas de Meta Ads.
          </p>
          <div className="hero__cta">
            <Link to="/contacto" className="btn btn--primary">
              Empieza tu proyecto
            </Link>
            <Link to="/servicios" className="btn btn--ghost">
              Ver servicios
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          {/* Placeholder: aquí va el render/imagen 3D que proporcione la diseñadora */}
          <div className="img-placeholder hero__placeholder">
            Imagen / render principal
            <br />
            (pendiente de cliente)
          </div>
        </div>
      </section>

      {/* INTRO BREVE */}
      <section className="section intro">
        <div className="container intro__grid">
          <div className="intro__text">
            <h2>
              No hacemos marketing <br />
              <span className="text-gradient">como todos los demás</span>
            </h2>
            <p>
              


              
            </p>
          </div>
          <div className="intro__stats">
            <div className="stat-card">
              <span className="stat-card__number">+0</span>
              <span className="stat-card__label">Clientes atendidos</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__number">+0</span>
              <span className="stat-card__label">Proyectos completados</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__number">0%</span>
              <span className="stat-card__label">Satisfacción</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
