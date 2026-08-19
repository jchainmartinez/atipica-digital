import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <h3>
            Atípica<span className="text-gradient">Digital</span>
          </h3>
          <p className="footer__slogan">Pienza Diferente</p>
        </div>

        <div className="footer__links">
          <Link to="/">Inicio</Link>
          <Link to="/acerca-de">Acerca de</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/clientes">Clientes</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="footer__social">
          {/* Placeholder: redes sociales reales pendientes */}
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="WhatsApp">WA</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Atípica Digital. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
