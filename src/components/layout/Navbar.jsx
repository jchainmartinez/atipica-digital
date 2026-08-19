import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Acerca de', path: '/acerca-de' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Clientes', path: '/clientes' },
  { label: 'Contacto', path: '/contacto' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={() => setIsOpen(false)}>
          Atípica<span className="text-gradient">Digital</span>
        </NavLink>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
