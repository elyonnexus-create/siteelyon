import { motion } from 'framer-motion';

export function ClosingSection() {
  return (
    <section
      id="contato"
      className="section-no-py relative min-h-[90vh] bg-[#0A0A0A] w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Top Transition Blur */}
      <div
        className="absolute top-0 left-0 w-full h-40 z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #0A0A0A 0%, transparent 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
        }}
      />

      {/* Background Image with low opacity and top fade */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: "url('/images/ClosingBG.png')",
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)'
        }}
      />

      {/* Radial Golden Glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(201, 168, 76, 0.15) 0%, transparent 75%)'
        }}
      />

      <div className="relative z-20 container-medium flex flex-col items-center text-center">
        {/* Top text */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#C9A84C]/80 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase mb-10"
        >
          O próximo passo é seu.
        </motion.span>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-h1 font-accent font-medium text-white mb-6 leading-[1.1] max-w-[950px]"
        >
          O negócio que você imaginou <br className="hidden md:block" /> quando tudo começou.
        </motion.h2>

        {/* Highlighted Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-h2 font-accent font-italic text-[#C9A84C] mb-14"
        >
          Ainda é possível.
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl font-medium font-italic text-white/70 mb-[var(--gap-title-content,64px)] leading-relaxed max-w-[700px]"
        >
          Um projeto. Trinta dias. <br />
          Uma operação que finalmente trabalha por você.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <a
            href="https://wa.me/556181836313?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20iniciar%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '14px 40px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backgroundColor: 'transparent',
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              textDecoration: 'none'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            INICIAR UM PROJETO
          </a>
          <a
            href="#servicos"
            className="text-white/40 hover:text-white font-bold text-xs tracking-[0.15em] uppercase flex items-center gap-3 transition-all duration-300"
          >
            Ver soluções <span className="text-xl">›</span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
