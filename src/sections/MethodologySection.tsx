import { motion } from 'framer-motion';

const methodologyCards = [
  {
    number: "01",
    tag: "CORPO",
    title: "O que opera, executa e escala.",
    description: "Os sistemas, a automação, os agentes, a presença digital. O que trabalha quando você não está. O que o cliente vê, sente e experimenta. Construído para durar, não para impressionar.",
    image: "/images/corpo.png"
  },
  {
    number: "02",
    tag: "ALMA — A CONSCIÊNCIA",
    title: "O que orienta cada decisão.",
    description: "Os princípios, o posicionamento, a identidade. O filtro que separa o que aceitar do que recusar. A consciência não precisa gritar, ela simplesmente não cede. É o que faz sua marca ser reconhecida antes de qualquer palavra ser dita.",
    image: "/images/alma.png"
  },
  {
    number: "03",
    tag: "ESPÍRITO",
    title: "O que transcende o negócio.",
    description: "A visão além do faturamento. O propósito que permanece quando a tecnologia muda, o mercado vira e as tendências passam. Mas espírito sem clareza é sonho sem direção.\n\nPor isso unimos os dois: a visão que vem de dentro, e os dados que mostram o que o olho não vê. Quem estava pronto para voltar mas você não sabia. Quanto ficou na mesa no mês passado. Onde o seu cliente desaparece antes de comprar...",
    image: "/images/espirito.png"
  }
];

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-24 md:py-32 bg-[#0A0A0A] w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="container-premium max-w-[1000px] flex flex-col items-center relative">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: 'clamp(80px, 12vw, 160px)' }}>
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
            Metodologia
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-6 tracking-tight leading-tight max-w-4xl font-['Urbanist']"
          >
            <span className="block text-3xl md:text-5xl font-bold mb-4">CORPO, ALMA E ESPIRITO.</span>
            <span className="block text-2xl md:text-3xl font-semibold text-[#C9A84C] italic">Cuidamos das três dimensões do seu negócio.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed font-medium"
          >
            Porque um negócio verdadeiramente grande não é só lucrativo. É vivo. <br />
            Cada projeto que a Elyon Nexus entrega passa pelas três dimensões. Não por metodologia por convicção de que nenhuma delas sobrevive sozinha.
          </motion.p>
        </div>

        {/* Vertical Stack of Cards */}
        <div className="flex flex-col gap-12 md:gap-20 w-full relative">

          {methodologyCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#050505] border border-white/5 rounded-[32px] md:rounded-[40px] grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center gap-10 md:gap-14 relative group hover:border-white/10 transition-colors w-full box-border"
              style={{ padding: 'clamp(32px, 5vw, 56px)' }}
            >
              {/* Left Content (Text) */}
              <div className="flex flex-col justify-center z-10 w-full min-w-0 min-h-0 h-auto">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xl font-bold font-['Urbanist'] text-[#C9A84C] tracking-[0.1em]">{card.number}</span>
                  <div className="text-[10px] font-bold text-[#C9A84C] tracking-[0.2em] uppercase">
                    {card.tag}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-['Urbanist'] text-white mb-6 tracking-tight leading-tight">
                  {card.title}
                </h3>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium whitespace-pre-line">
                  {card.description}
                </p>
              </div>

              {/* Right Visual Element - Using methodology images */}
              <div className="flex justify-center md:justify-end items-center relative h-[300px] md:h-full w-full min-w-0 min-h-0">
                <div className="relative w-full h-full max-w-[400px] flex justify-center items-center">
                  {/* Subtle Glow Background */}
                  <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full" />

                  <img
                    src={card.image}
                    alt={card.title}
                    className="relative z-20 w-full h-[300px] md:h-[400px] object-contain scale-110 drop-shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
