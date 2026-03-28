import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

const values = [
  {
    title: "Curiosidade",
    image: "https://framerusercontent.com/images/E0nlfxwQD5Ro79vVl64QrWjNdE.png"
  },
  {
    title: "Capricho",
    image: "https://framerusercontent.com/images/tQmYAatSf0f44ppWQO0sxXrvIfs.png"
  },
  {
    title: "Consciência",
    image: "https://framerusercontent.com/images/koOCZxRDQE8fn2PH8SJQ0PgIT4.png"
  },
  {
    title: "Criatividade",
    image: "https://framerusercontent.com/images/K8WtQ1B0X2lE2EuTjnJoEoLFdQ.png"
  },
  {
    title: "Comunicação",
    image: "https://framerusercontent.com/images/oQPgiizGzD6WefpvhtnBFcbYc.png"
  },
  {
    title: "Coragem",
    image: "https://framerusercontent.com/images/Xm2mG2QeteTlEthKIZLaLySDA.png"
  }
];

export function ValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // There are 6 items, so we map 0-1 to 0-5
    let index = Math.floor(latest * values.length);
    if (index >= values.length) index = values.length - 1;
    if (index < 0) index = 0;
    setActiveIndex(index);
  });

  return (
    <section
      ref={containerRef}
      id="valores"
      className="relative h-[400vh] md:h-[600vh] bg-[#0A0A0A]"
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
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-24">

        <div className="container-premium flex flex-col h-full max-w-6xl">

          {/* Header */}
          <div className="flex flex-col items-center mb-8 md:mb-16 shrink-0">
            <div className="w-2 h-2 rounded-full bg-white mb-6"></div>
            <h2 className="text-3xl md:text-[3rem] font-['Urbanist'] font-semibold text-[#666666] text-center">
              Quais são os valores que nos guiam?
            </h2>
          </div>

          {/* Main content grid - Forced to side-by-side always */}
          <div className="flex-1 w-full flex flex-row items-center justify-between pb-10">

            {/* Left List */}
            <div className="relative h-[400px] w-1/2 flex items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
              <motion.div
                className="absolute left-0 w-full flex flex-col items-start"
                animate={{ y: `calc(150px - ${activeIndex * 100}px)` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {values.map((item, i) => (
                  <div key={i} className="h-[100px] flex items-center justify-start w-full">
                    <motion.h3
                      animate={{
                        color: activeIndex === i ? '#FFFFFF' : '#333333',
                        scale: activeIndex === i ? 1.05 : 1,
                        originX: 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl sm:text-4xl md:text-6xl font-['Urbanist'] font-bold cursor-default tracking-tight text-left"
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Images */}
            <div className="relative w-1/2 h-[350px] md:h-[500px] flex items-center justify-end pl-4 md:pl-0">
              {values.map((item, i) => (
                <motion.img
                  key={i}
                  src={item.image}
                  alt={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: activeIndex === i ? 1 : 0,
                    y: activeIndex === i ? 0 : 20,
                    scale: activeIndex === i ? 1 : 0.95,
                    pointerEvents: activeIndex === i ? "auto" : "none"
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute max-w-[120%] md:max-w-full max-h-full object-contain right-0 border border-white/10 rounded-[32px] bg-[#0D0D0D] p-2 md:p-4 shadow-2xl"
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
