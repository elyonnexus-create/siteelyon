import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const forWho = [
  "Empresários que já faturam, mas perderam a leveza de liderar.",
  "Negócios que funcionam — mas dependem de você para tudo.",
  "Líderes que querem voltar a pensar no que importa.",
  "Marcas que entendem: o barato sai caro."
];

const notForWho = [
  "Quem busca a solução mais barata do mercado.",
  "Quem espera resultados sem envolvimento.",
  "Quem não está pronto para mudar de verdade.",
  "Quem quer só mais uma ferramenta — sem estratégia."
];

export function ForWhoSection() {
  return (
    <section
      id="para-quem"
      className="py-[var(--section-py)] relative bg-[#0A0A0A] overflow-hidden"
    >
      {/* Top Transition Blur */}
      <div
        className="absolute top-0 left-0 w-full h-40 z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #0A0A0A 0%, transparent 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
        }}
      />

      {/* Subtle golden glow background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(201, 168, 76, 0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container-narrow relative z-10">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--gap-title-content, 64px)' }}>
          {/* Pill */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--gap-pill-title, 32px)' }}>
            <div
              style={{
                display: 'inline-block',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 9999,
                padding: '10px 32px',
                fontSize: 12,
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '0.08em',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                lineHeight: 1
              }}
            >
              SELEÇÃO
            </div>
          </div>

          <h2 className="text-h1 text-white">
            Para quem é.{' '}
            <span className="text-white/30">E para quem não é.</span>
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {/* FOR WHO — Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              border: '1px solid rgba(201, 168, 76, 0.2)',
              borderRadius: 'var(--radius-md, 16px)',
              padding: '40px 32px',
              backgroundColor: 'rgba(201, 168, 76, 0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(201, 168, 76, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Check size={18} color="#C9A84C" strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: '#C9A84C',
                  textTransform: 'uppercase',
                }}
              >
                Para quem é
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {forWho.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}
                >
                  <div style={{ marginTop: 4, flexShrink: 0 }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#C9A84C',
                      }}
                    />
                  </div>
                  <p
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NOT FOR WHO — Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md, 16px)',
              padding: '40px 32px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={18} color="rgba(255,255,255,0.35)" strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'rgba(255, 255, 255, 0.35)',
                  textTransform: 'uppercase',
                }}
              >
                Para quem não é
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {notForWho.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}
                >
                  <div style={{ marginTop: 4, flexShrink: 0 }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      }}
                    />
                  </div>
                  <p
                    style={{
                      color: 'rgba(255, 255, 255, 0.35)',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
