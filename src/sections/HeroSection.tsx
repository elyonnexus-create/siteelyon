import { motion } from 'framer-motion';
import './HeroSection.css';

const PHRASE = "AI FIRST  ·  ELYON NEXUS  ·  ";

export function HeroSection() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Infinite scrolling background text */}
      <style>{`
        @keyframes hero-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-marquee-track {
          display: inline-block;
          white-space: nowrap;
          animation: hero-marquee 80s linear infinite;
        }
      `}</style>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          overflow: 'hidden',
          zIndex: 0,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          width: '100%',
          maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)',
        }}
      >
        <div className="hero-marquee-track">
          {/* 2 copies — CSS keyframe loops at -50% = one full copy length */}
          <span className="hero-background-title">{PHRASE}{PHRASE}{PHRASE}</span>
          <span className="hero-background-title">{PHRASE}{PHRASE}{PHRASE}</span>
        </div>
      </div>

      {/* Bottom-left content block */}
      <div
        className="absolute bottom-20 left-6 z-20 max-w-[480px] md:bottom-14 md:left-14"
      >
        <p
          style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.35rem)',
            lineHeight: 1.5,
            color: '#D1D1D1',
            marginBottom: 24,
            fontWeight: 400
          }}
        >
          A tecnologia que liberta.<br />
          O propósito que guia.
        </p>

        <div style={{ display: 'flex', gap: 12 }}>
          <a
            href="https://wa.me/556181836313"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fale-conosco hover:bg-[#3A3A3A] transition-all"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Fale conosco
          </a>
          <a
            href="#servicos"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-nossos-servicos hover:border-white/40 transition-all"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Nossos serviços
          </a>
        </div>
      </div>
      {/* Floating Logo Aspect */}
      <div
        className="absolute top-[30%] right-1/2 translate-x-1/2 md:translate-x-0 md:top-1/2 md:right-[5%] lg:right-[10%]"
        style={{
          transform: 'translateY(-50%)',
          zIndex: 10,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <motion.img
          src="/logo.png"
          alt="Logo Elyon 3D Effect"
          className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[650px]"
          style={{ height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}
          animate={{
            y: [0, -30, 0],
            rotateY: [0, 5, 0],
            rotateX: [0, 5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}
