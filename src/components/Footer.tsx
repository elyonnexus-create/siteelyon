
export function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        width: '100%',
        color: '#fff',
        padding: '80px 0 40px'
      }}
    >
      <div 
        className="container-premium"
        style={{ 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 60,
          marginBottom: 80
        }}
      >
        {/* Brand & Tagline */}
        <div style={{ gridColumn: 'span 2' }}>
          <span
            style={{
              fontFamily: 'Urbanist, sans-serif',
              fontSize: 18,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '0.15em',
              display: 'block',
              marginBottom: 16
            }}
          >
            ELYON NEXUS
          </span>
          <p
            style={{
              fontSize: 22,
              color: '#C9A84C',
              lineHeight: 1.4,
              maxWidth: 300
            }}
          >
            Construindo o que o tempo não destrói.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 
            style={{ 
              fontSize: 10, 
              fontWeight: 700, 
              color: 'rgba(255,255,255,0.3)', 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase',
              marginBottom: 24
            }}
          >
            Institucional
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { label: 'Por que existimos', href: '#porque-existimos' },
              { label: 'Nosso DNA', href: '#dna' },
              { label: 'Valores', href: '#valores' },
              { label: 'Soluções', href: '#servicos' },
              { label: 'Método', href: '#metodologia' }
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.href.replace('#', ''));
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#777',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#777')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 
            style={{ 
              fontSize: 10, 
              fontWeight: 700, 
              color: 'rgba(255,255,255,0.3)', 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase',
              marginBottom: 24
            }}
          >
            Conexões
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <li>
              <a
                href="mailto:contato@elyonnexus.com.br"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#777',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#777')}
              >
                contato@elyonnexus.com.br
              </a>
            </li>
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/elyon_nexus' },
              { label: 'LinkedIn', href: 'https://br.linkedin.com/in/elyon-nexus-8ab417343' },
              { label: 'WhatsApp', href: 'https://wa.me/556181836313' } // Brasília
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#777',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#777')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        style={{ 
          maxWidth: 1100, 
          margin: '0 auto', 
          paddingTop: 40,
          borderTop: '1px solid rgba(255,255,255,0.03)',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <span 
          style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: 11, 
            fontWeight: 500,
            color: 'rgba(255,255,255,0.2)', 
            letterSpacing: '0.05em' 
          }}
        >
          CNPJ 64.308.632/0001-08 | Brasília, Brasil
        </span>
      </div>
    </footer>
  );
}
