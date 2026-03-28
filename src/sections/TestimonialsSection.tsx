import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const testimonials = [
  {
    image: "https://framerusercontent.com/images/R161l9AU3UG0DGqnlbBjQ6TMbY.png?scale-down-to=512",
    logoText: "NAKAZUMY SUSHI",
    quote: "Finalmente um atendimento que não falha às 23h de domingo. Meus clientes perceberam, e meu faturamento também.",
    name: "Marcos Nakamura",
    role: "PROPRIETÁRIO — SANTOS/SP",
    quoteColor: "#fff"
  },
  {
    image: "https://framerusercontent.com/images/1wowEGADIdaRIrTPrr0GSBo51nY.png?scale-down-to=512",
    logoText: "ELYON NEXUS",
    quote: "Eles entenderam a alma do meu negócio antes de falar em tecnologia. Isso é raro. Muito raro.",
    name: "Cliente Elyon Nexus",
    role: "EMPREENDEDOR, BRASIL",
    quoteColor: "#fff"
  },
  {
    image: "https://framerusercontent.com/images/fq6nzMEjGFMRR47kSmydeKd4KaI.jpg?scale-down-to=1024",
    logoText: "ELYON NEXUS",
    quote: "Recuperamos clientes que achávamos perdidos. Os dados que já tínhamos viraram receita, sem aumentar o custo de aquisição.",
    name: "Cliente Elyon Nexus",
    role: "GESTORA COMERCIAL, BRASIL",
    quoteColor: "#fff"
  },
  {
    image: "https://framerusercontent.com/images/fq6nzMEjGFMRR47kSmydeKd4KaI.jpg?scale-down-to=1024", // Keeping generic image
    logoText: "ELYON NEXUS",
    quote: "Não comprei uma ferramenta. Ganhei um parceiro que pensa no meu negócio como se fosse o dele.",
    name: "Cliente Elyon Nexus",
    role: "FUNDADOR, BRASIL",
    quoteColor: "#fff"
  }
];

const CARD_WIDTH = 480;
const CARD_GAP = 32;

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);
    
    // Calculate index based on actual card width
    const firstCard = containerRef.current.querySelector('.testimonial-card');
    const itemWidth = firstCard ? firstCard.clientWidth + CARD_GAP : CARD_WIDTH + CARD_GAP;
    
    const index = Math.min(
      Math.round(scrollLeft / itemWidth),
      testimonials.length - 1
    );
    setActiveIndex(index);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const firstCard = containerRef.current.querySelector('.testimonial-card');
    const itemWidth = firstCard ? firstCard.clientWidth + CARD_GAP : CARD_WIDTH + CARD_GAP;
    
    containerRef.current.scrollBy({
      left: direction === 'right' ? itemWidth : -itemWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="clientes"
      className="py-20 md:py-32"
      style={{ backgroundColor: '#0A0A0A', width: '100%', overflowX: 'hidden' }}
    >
      {/* Header */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: 48 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'inline-block',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 9999,
            padding: '10px 32px',
            marginBottom: 32,
            fontSize: 12,
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.08em',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            lineHeight: 1
          }}
        >
          Clientes
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Urbanist, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: 16,
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}
        >
          Depoimentos <br /> que nos movem.
        </motion.h2>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 32 }}>
          {testimonials.map((_, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: i === activeIndex ? '#fff' : 'rgba(255,255,255,0.2)',
                transform: i === activeIndex ? 'scale(1.25)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div style={{ position: 'relative', width: '100%', maxWidth: 1400, margin: '0 auto' }}>

        {/* Left Nav (Hidden on Mobile) */}
        <div className="hidden md:block" style={{ position: 'absolute', top: '40%', transform: 'translateY(-50%)', left: 24, zIndex: 30, pointerEvents: 'none' }}>
          <AnimatePresence>
            {canScrollLeft && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => scroll('left')}
                style={{
                  pointerEvents: 'auto',
                  width: 48, height: 48,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  color: '#fff',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <ChevronLeft size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Right Nav (Hidden on Mobile) */}
        <div className="hidden md:block" style={{ position: 'absolute', top: '40%', transform: 'translateY(-50%)', right: 24, zIndex: 30, pointerEvents: 'none' }}>
          <AnimatePresence>
            {canScrollRight && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => scroll('right')}
                style={{
                  pointerEvents: 'auto',
                  width: 48, height: 48,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  color: '#fff',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <ChevronRight size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll Container */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="testimonials-scroll"
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: CARD_GAP,
            padding: '16px 24px 80px',
            scrollbarWidth: 'none',
          }}
        >
          <style>{`.testimonials-scroll::-webkit-scrollbar { display: none; }`}</style>

          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card"
              style={{
                flexShrink: 0,
                flexGrow: 0,
                width: 'min(480px, 85vw)',
                minWidth: 'min(480px, 85vw)',
                scrollSnapAlign: 'center',
                backgroundColor: '#0d0d0d',
                borderRadius: 32,
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8)',
                display: 'flex',
                flexDirection: 'column',
                padding: '24px',
                overflow: 'hidden'
              }}
            >
              {/* Text */}
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'Urbanist, sans-serif',
                    fontSize: 'clamp(16px, 4vw, 20px)',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '0.15em',
                    marginBottom: 16,
                    opacity: 0.9
                  }}
                >
                  {client.logoText}
                </h3>

                <p
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(16px, 4.5vw, 18px)',
                    lineHeight: 1.6,
                    color: '#fff',
                    fontWeight: 400,
                    marginBottom: 24,
                    flex: 1
                  }}
                >
                  "{client.quote}"
                </p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ color: '#bbb', fontSize: 13, fontWeight: 500 }}>{client.name}</span>
                  <span style={{ color: '#C9A84C', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{client.role}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* End spacer */}
          <div style={{ flexShrink: 0, minWidth: '10vw' }} />
        </div>
      </div>
    </section>
  );
}


