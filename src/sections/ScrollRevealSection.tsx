import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ScrollRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Block 1
  const color1 = useTransform(
    scrollYProgress,
    [0, 0.05, 0.15, 0.25],
    ["rgba(255,255,255,0.2)", "rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(255,255,255,0.2)"]
  );

  const color1Gold = useTransform(
    scrollYProgress,
    [0, 0.05, 0.15, 0.25],
    ["rgba(201,168,76,0.2)", "rgba(201,168,76,1)", "rgba(201,168,76,1)", "rgba(201,168,76,0.2)"]
  );

  // Block 2
  const color2 = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.40, 0.50],
    [
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,1)",
      "rgba(255,255,255,1)",
      "rgba(255,255,255,0.2)",
    ]
  );

  // Block 3
  const color3 = useTransform(
    scrollYProgress,
    [0, 0.40, 0.50, 0.65, 0.75],
    [
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,1)",
      "rgba(255,255,255,1)",
      "rgba(255,255,255,0.2)",
    ]
  );

  // Block 4
  const color4 = useTransform(
    scrollYProgress,
    [0, 0.65, 0.75, 0.90, 0.95],
    [
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,1)",
      "rgba(255,255,255,1)",
      "rgba(255,255,255,0.2)",
    ]
  );

  // Block 5
  const color5 = useTransform(
    scrollYProgress,
    [0, 0.90, 0.95, 1],
    [
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,1)",
      "rgba(255,255,255,1)",
    ]
  );

  return (
    <section
      ref={containerRef}
      id="porque-existimos"
      className="relative h-[300vh] bg-[#0A0A0A]"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Watermark "Propósito" */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute font-['Urbanist'] font-bold uppercase"
          style={{
            fontSize: 'clamp(160px, 22vw, 360px)',
            color: '#C9A84C',
            opacity: 0.02,
            whiteSpace: 'nowrap',
            letterSpacing: '0.05em',
            zIndex: 0,
          }}
        >
          Propósito
        </span>

        <div className="container-premium flex flex-col justify-center relative z-10 max-w-5xl">

          <motion.h2
            style={{ color: color1 }}
            className="text-xl md:text-[2rem] font-['Urbanist'] font-semibold mb-4 md:mb-6"
          >
            Por que existimos?
          </motion.h2>

          <div className="text-xl md:text-3xl lg:text-[2.2rem] leading-[1.4] font-medium font-['Inter'] tracking-tight">
            {/* Block 1 */}
            <motion.div
              style={{ color: color1 }}
              className="mb-8 md:mb-12 transition-colors duration-100"
            >
              <span className="block font-bold md:text-5xl lg:text-6xl text-3xl font-['Urbanist'] mb-1">
                Devolver o que foi tomado.
              </span>
              <motion.span style={{ color: color1Gold }} className="block italic font-['Inter'] font-normal">
                Seu tempo. Sua clareza. Seu propósito.
              </motion.span>
            </motion.div>

            {/* Block 2 */}
            <motion.p
              style={{ color: color2 }}
              className="mb-6 md:mb-8 transition-colors duration-100"
            >
              Tem um momento e quem empreende sabe qual é em que você olha para
              o que construiu e percebe que virou prisioneiro da própria criação.
            </motion.p>

            {/* Block 3 */}
            <motion.p
              style={{ color: color3 }}
              className="mb-6 md:mb-8 transition-colors duration-100"
            >
              O negócio cresceu. Mas você não está mais no comando. <strong className="font-bold">A operação está.</strong>
            </motion.p>

            {/* Block 4 */}
            <motion.p
              style={{ color: color4 }}
              className="mb-2 transition-colors duration-100"
            >
              A Elyon Nexus nasceu para esse momento. Não para adicionar mais tecnologia
              ao caos mas para construir a ordem que te devolve ao que importa:
            </motion.p>

            {/* Block 5 */}
            <motion.p
              style={{ color: color5 }}
              className="transition-colors duration-100"
            >
              <strong className="font-bold">liderar com visão, crescer com intenção, e construir algo que o tempo não destrói.</strong>
            </motion.p>
          </div>

        </div>
      </div>

      {/* Bottom Transition Fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #050505 0%, transparent 100%)',
        }}
      />
    </section>
  );
}
