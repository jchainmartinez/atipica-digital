import './PageShared.css';
import './Clientes.css';

import LogoVete from '../assets/images/LogoVete.jpg';
import LogoAgapsa from '../assets/images/LogoAgapsa.jpg';
import LogoImpa from '../assets/images/LogoImpa.jpg';
import LogoNinis from '../assets/images/LogoNinis.jpg';

const testimonios = [
  {
    frase: 'Atípica nos ayudó a tener una presencia digital que nunca habíamos imaginado para nuestro negocio.',
    autor: 'Cliente Atípica',
  },
  {
    frase: 'Por fin una agencia que entiende lo que necesitas sin que tengas que explicarlo mil veces.',
    autor: 'Cliente Atípica',
  },
  {
    frase: 'Nos hicieron ver profesionales desde el primer día. La diferencia fue inmediata.',
    autor: 'Cliente Atípica',
  },
];

const clientes = [
  { nombre: 'El Imparcial de Tlaxcala',        logo: LogoImpa },
  { nombre: 'Mapas TLX',                        logo: null },
  { nombre: 'AGAPSA',                           logo: LogoAgapsa },
  { nombre: 'Veterinaria Tu Ganado es Primero', logo: LogoVete },
  { nombre: 'Ninis Pastelitos',                 logo: LogoNinis },
];

function Clientes() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__tag">Clientes</span>
          <h1>
            Marcas que ya{' '}
            <span className="text-gradient">piensan diferente</span>
          </h1>
          <p className="page-hero__lead">
            Cada cliente es una historia distinta. Aquí van algunas.
          </p>
        </div>
      </section>

      {/* TESTIMONIOS / BOCADILLOS */}
      <section className="section">
        <div className="container testimonios-grid">
          {testimonios.map((t, i) => (
            <div className="bocadillo-wrapper" key={i}>
              <div className="bocadillo">
                <p className="bocadillo__frase">"{t.frase}"</p>
                <span className="bocadillo__autor">— {t.autor}</span>
              </div>
              <div className="bocadillo__cola"></div>
              <div className="silueta">
                <div className="silueta__cabeza"></div>
                <div className="silueta__cuerpo"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTES */}
      <section className="section clientes-seccion">
        <div className="container">
          <h2 className="section-title">
            Colaboramos <span className="text-gradient">de la mano</span>
          </h2>
          <div className="clientes-grid">
            {clientes.map(({ nombre, logo }) => (
              <div className="cliente-card" key={nombre}>
                <div className="cliente-card__logo">
                  {logo
                    ? <img src={logo} alt={`Logo ${nombre}`} />
                    : <span>{nombre.charAt(0)}</span>
                  }
                </div>
                <p className="cliente-card__nombre">{nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Clientes;
