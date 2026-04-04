import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const WHATSAPP_URL = 'https://wa.me/556181836313?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento!';

function handleNav(e: React.MouseEvent<HTMLAnchorElement>, id: string, closeMenu?: () => void) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (closeMenu) closeMenu();
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar-pill ${isOpen ? 'menu-open' : ''}`}>
        <div className="navbar-logo-icon">
          <img src="/logo.webp" alt="Logo Elyon" width="45" height="45" style={{ objectFit: 'contain' }} />
        </div>

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li><a href="#sobre" onClick={(e) => handleNav(e, 'sobre')}>Sobre</a></li>
          <li><a href="#servicos" onClick={(e) => handleNav(e, 'servicos')}>Serviços</a></li>
          <li><a href="#metodologia" onClick={(e) => handleNav(e, 'metodologia')}>Metodologia</a></li>
          <li><a href="#clientes" onClick={(e) => handleNav(e, 'clientes')}>Clientes</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-contact-btn"
        >
          Orçamento
        </a>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="navbar-mobile-overlay"
            >
              <ul className="mobile-links">
                <li><a href="#sobre" onClick={(e) => handleNav(e, 'sobre', () => setIsOpen(false))}>Sobre</a></li>
                <li><a href="#servicos" onClick={(e) => handleNav(e, 'servicos', () => setIsOpen(false))}>Serviços</a></li>
                <li><a href="#metodologia" onClick={(e) => handleNav(e, 'metodologia', () => setIsOpen(false))}>Metodologia</a></li>
                <li><a href="#clientes" onClick={(e) => handleNav(e, 'clientes', () => setIsOpen(false))}>Clientes</a></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
