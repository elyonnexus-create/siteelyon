
export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#0A0A0A] border-t border-white/5 w-full text-white relative z-50"
      style={{ paddingTop: '80px', paddingBottom: '32px' }}
    >
      <div
        className="container-premium grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 items-start"
      >
        {/* Brand & Tagline */}
        <div className="md:col-span-2">
          <span className="block font-bold text-lg text-white tracking-[0.15em] mb-4">
            ELYON NEXUS
          </span>
          <p className="text-body-lg text-[#C9A84C] max-w-[300px]">
            Construindo o que o tempo não destrói.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6">
            Institucional
          </h4>
          <ul className="flex flex-col gap-3.5">
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
                  className="text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6">
            Conexões
          </h4>
          <ul className="flex flex-col gap-3.5">
            <li>
              <a
                href="mailto:contato@elyonnexus.com.br"
                className="text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-300"
              >
                contato@elyonnexus.com.br
              </a>
            </li>
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/elyon_nexus' },
              { label: 'LinkedIn', href: 'https://br.linkedin.com/in/elyon-nexus-8ab417343' },
              { label: 'WhatsApp', href: 'https://wa.me/556181836313' }
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-premium border-t border-white/5 text-center" style={{ marginTop: '64px', paddingTop: '32px' }}>
        <span className="text-[11px] font-medium text-white/40 tracking-wider">
          CNPJ 64.308.632/0001-08 | Brasília, Brasil
        </span>
      </div>
    </footer>
  );
}
