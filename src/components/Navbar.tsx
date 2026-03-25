import './Navbar.css';

const WHATSAPP_URL = 'https://wa.me/556181836313?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento!';

function handleNav(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar-pill">
        <div className="navbar-logo-icon">
          <img src="/logo.png" alt="Logo Elyon" width="45" height="45" style={{ objectFit: 'contain' }} />
        </div>

        <ul className="navbar-links">
          <li><a href="#sobre" onClick={(e) => handleNav(e, 'sobre')}>Sobre</a></li>
          <li><a href="#servicos" onClick={(e) => handleNav(e, 'servicos')}>Serviços</a></li>
          <li><a href="#metodologia" onClick={(e) => handleNav(e, 'metodologia')}>Metodologia</a></li>
          <li><a href="#clientes" onClick={(e) => handleNav(e, 'clientes')}>Clientes</a></li>
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-contact-btn"
        >
          Orçamento
        </a>
      </nav>
    </div>
  );
}
