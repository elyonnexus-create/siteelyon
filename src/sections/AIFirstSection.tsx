import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextParticle } from '../components/ui/text-particle';

export function AIFirstSection() {
  const sectionRef = useRef(null);

  // Configuração do Parallax para o texto gigante (AI First)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Movimenta o texto suavemente no eixo Y
  const backgroundTextY = useTransform(scrollYProgress, [0, 1], [-120, -420]);

  return (
    <section
      ref={sectionRef}
      id="dna"
      className="relative bg-[#0A0A0A] w-full overflow-hidden flex items-center font-sans"
    >
      {/* Top Transition Blur */}
      <div
        className="absolute top-0 left-0 w-full h-24 z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #0A0A0A 0%, transparent 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          maskImage: 'linear-gradient(to bottom, black 15%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 15%, transparent 100%)',
        }}
      />

      {/* Decorador de Fundo */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[800px] z-0 opacity-25 pointer-events-none mix-blend-screen blur-[2px]"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      >
        <img src="/images/ai-abstract.png" alt="Fluxo de Dados Abstrato Elyon" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
      </div>
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(201,168,76,0.15)_0%,_transparent_70%)]" />
      </div>

      <div className="container-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:items-end">

          {/* Coluna Esquerda: Elemento Visual e Parallax */}
          <div className="md:col-span-7 relative min-h-[400px] md:min-h-[500px] flex flex-col justify-end">

            {/* Texto Parallax Interativo com Partículas */}
            <motion.div
              style={{ y: backgroundTextY }}
              className="absolute mt-10 md:mt-0 top-[-2rem] md:top-0 left-4 sm:left-6 md:left-2 pointer-events-none select-none z-0 w-[550px] h-[550px] origin-top-left scale-[0.55] sm:scale-75 md:scale-100"
            >
              <TextParticle
                text={"AI\nFirst"}
                fontSize={160}
                color="#C9A84C"
                gap={6}
                mouseRadius={120}
                particleSize={2.2}
                className="w-full h-full opacity-60"
              />
            </motion.div>

            {/* Card de Citação */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 pl-6 md:ml-auto md:max-w-xs mb-10 mt-64 md:mt-0"
            >
              {/* Tracinho Decorativo Lateral */}
              <div className="absolute left-[-2rem] top-0 bottom-0 w-[2px] bg-[#C9A84C]/50" />

              <p className="text-xl md:text-2xl italic text-[#C9A84C] mb-4 leading-tight font-medium">
                "Você já tem o mais difícil: a visão.<br />
                A Inteligência Artificial é o que faz ela escalar."
              </p>
              <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] font-bold">
                — Filosofia Elyon Nexus
              </span>
            </motion.div>
          </div>

          {/* Coluna Direita: Conteúdo Principal */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-h2 text-white leading-tight mb-2 tracking-tight">
                Não adicionamos IA ao seu negócio.
              </h3>
              <h4 className="text-h1 text-[#C9A84C] font-accent font-italic leading-tight tracking-tight">
                Redesenhamos ele.
              </h4>
            </motion.div>

            <div className="space-y-6 text-body-base text-white/70 font-light">
              <p>
                A maioria das empresas adiciona IA como se fosse um acessório. Coloca por cima do que já existe e espera milagre.
              </p>

              <div className="py-4">
                <h5 className="text-h3 text-white mb-3">Nós redesenhamos.</h5>
                <p>
                  Cada processo, cada ponto de contato com o seu cliente, cada decisão que hoje depende de você estar presente repensada com inteligência artificial no centro.
                </p>
              </div>

              <p className="text-h3 text-white leading-snug">
                Não para substituir o que é humano. Para multiplicar o que só você tem.
              </p>
            </div>

            {/* Tags de Serviços */}
            <div className="flex flex-wrap gap-3 mt-4">
              {['Agentes Autônomos', 'Automação de Processos', 'Análise de Dados', 'Sistemas Multi-agente', 'Integrações em Tempo Real'].map((tag, index) => (
                <div
                  key={index}
                  className="px-8 py-2.5 text-[10px] md:text-xs font-semibold tracking-[0.08em] text-white border border-white/15 bg-white/5 rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      {/* Bottom Transition Fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0A0A0A 0%, transparent 100%)',
        }}
      />
    </section>
  );
}
