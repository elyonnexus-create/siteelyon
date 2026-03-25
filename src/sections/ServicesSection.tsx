"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const buildItems = [
  {
    number: "01",
    title: "Seu cliente atendido. Mesmo quando você não está.",
    description: "Atendimento inteligente via WhatsApp, disponível 24 horas por dia, 7 dias por semana. Com memória de contexto, alma da marca e capacidade de resolver, encantar e vender sem que você precise estar presente para que o cliente seja bem atendido.",
    tags: ["WhatsApp", "Disponível 24/7", "Sem código"]
  },
  {
    number: "02",
    title: "Mais receita com o que você já tem.",
    description: "Analisamos o histórico de clientes antigos e novos, identificamos quem está pronto para voltar e reduzimos o custo de trazer novos. A receita que você deixa na mesa todos os meses agora capturada.",
    tags: ["Automação", "Análise de dados", "Escalável"]
  },
  {
    number: "03",
    title: "Uma marca que o tempo não apaga.",
    description: "Posicionamento, identidade e materiais construídos com a nossa metodologia. Não para estar na moda para permanecer quando ela passar.",
    tags: ["Branding", "Estratégia", "Alta performance"]
  }
];

// Componente para fazer cada item "acender" conforme rola a página sem usar sticky (preserva o layout 100%)
function RevealBuildItem({ item }: { item: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"] // Mapeia desde 90% da tela (baixo) até 10% (topo)
  });

  // Fade In e Out: Apagado (15%) -> Aceso (100%) -> Apagado (15%)
  const titleColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["rgba(255, 255, 255, 0.15)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.15)"]
  );

  const descColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["rgba(156, 163, 175, 0.15)", "rgba(156, 163, 175, 1)", "rgba(156, 163, 175, 1)", "rgba(156, 163, 175, 0.15)"]
  );

  const tagsOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.15, 1, 1, 0.15]
  );

  // Efeito adicional: um sutil movimento para cima ao entrar
  const yOffset = useTransform(
    scrollYProgress,
    [0, 0.3],
    [30, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y: yOffset }}
      className="border-b border-white/10 group last:border-0"
    >
      <div className="flex flex-col gap-8 items-start text-left" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="flex-1 w-full">
          <motion.h3
            style={{ color: titleColor }}
            className="text-2xl md:text-3xl font-bold font-['Urbanist'] mb-8 leading-tight transition-colors duration-300 flex items-start gap-4"
          >
            <span className="text-xl md:text-2xl font-bold opacity-30 tabular-nums mt-1">
              {item.number}
            </span>
            <span>{item.title}</span>
          </motion.h3>
          <motion.p
            style={{ color: descColor }}
            className="text-lg md:text-xl leading-relaxed mb-8 max-w-4xl transition-colors duration-300"
          >
            {item.description}
          </motion.p>
          <motion.div
            style={{ opacity: tagsOpacity }}
            className="flex flex-wrap items-center mt-12 text-[10px] md:text-xs text-white/30 font-medium tracking-[0.2em] uppercase transition-opacity duration-300"
          >
            {item.tags.map((tag: string, tagIndex: number) => (
              <div key={tagIndex} className="flex items-center">
                {tagIndex > 0 && <span className="mx-8 text-white/10 font-light">|</span>}
                {tag}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start 85%", "end 15%"]
  });

  const introTitleColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    ["rgba(255, 255, 255, 0.15)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.15)"]
  );

  const introGoldColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    ["rgba(201, 168, 76, 0.15)", "rgba(201, 168, 76, 1)", "rgba(201, 168, 76, 1)", "rgba(201, 168, 76, 0.15)"]
  );

  const introDescColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    ["rgba(156, 163, 175, 0.15)", "rgba(156, 163, 175, 1)", "rgba(156, 163, 175, 1)", "rgba(156, 163, 175, 0.15)"]
  );

  return (
    <section
      id="servicos"
      className="py-24 md:py-32 bg-[#0A0A0A] w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="container-premium max-w-[850px] flex flex-col items-center">

        {/* Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
          Serviços
        </motion.div>

        {/* Title & Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-[3.5rem] font-['Urbanist'] font-bold text-white mb-6 tracking-tight text-center leading-tight"
        >
          Soluções personalizadas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl text-center mb-20 max-w-2xl"
        >
          Somos os parceiros ideais para empresas e profissionais que procuram por:
        </motion.p>

        {/* What We Build Section (From Image) */}
        <div className="w-full" style={{ marginBottom: '10px' }}>

          <div ref={introRef}>
            <motion.h2
              style={{ color: introTitleColor }}
              className="text-4xl md:text-5xl font-['Playfair_Display'] font-medium mb-4 transition-colors duration-100"
            >
              O que <motion.span style={{ color: introGoldColor }} className="italic transition-colors duration-100">construímos</motion.span> para você.
            </motion.h2>
            <motion.p
              style={{ color: introDescColor, paddingBottom: '40px' }}
              className="text-lg border-b border-white/10 transition-colors duration-100"
            >
              Antes de qualquer solução, existe uma pergunta: qual é o real problema? E daí que partimos sempre.
            </motion.p>
          </div>

          <div className="flex flex-col">
            {buildItems.map((item, index) => (
              <RevealBuildItem key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Removed grid of service cards */}

      </div>
    </section>
  );
}
