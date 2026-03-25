import { motion } from 'framer-motion';
import CountUp from '../components/ui/count-up';

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "EMPRESAS TRANSFORMADAS"
  },
  {
    value: 24,
    suffix: "/7",
    label: "ATENDIMENTO ATIVO PARA CLIENTES"
  },
  {
    value: 30,
    suffix: "",
    label: "DIAS PARA O PRIMEIRO RESULTADO"
  },
  {
    value: 100,
    suffix: "%",
    label: "PROJETOS ACOMPANHADOS ATÉ O RESULTADO APARECER"
  }
];

export function NumbersSection() {
  return (
    <section id="numeros" className="py-24 md:py-32 bg-[#0A0A0A] w-full flex flex-col items-center justify-center overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center px-6"
        style={{ marginBottom: '80px' }}
      >
        <div
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
          Números
        </div>
      </motion.div>

      <div className="container-premium max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className={`
                bg-[#0D0D0D] border border-white/10 rounded-[40px] 
                w-full h-[240px] md:h-[280px] flex flex-col relative group transition-all duration-500
                hover:border-white/20 hover:bg-[#111]
                ${i % 2 !== 0 ? 'lg:mt-16' : ''}
              `}
            >
              <div
                className="w-full h-full flex flex-col justify-between"
                style={{ padding: '2.5rem' }}
              >
                <h3 className={`text-xs md:text-[13px] font-bold text-white/40 tracking-[0.15em] leading-[1.4] uppercase ${i % 2 === 0 ? 'text-left pr-4' : 'text-right pl-4'}`}>
                  {stat.label}
                </h3>

                <div className={`flex items-baseline ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <CountUp
                    to={stat.value}
                    duration={2}
                    className="text-5xl md:text-6xl font-black font-['Urbanist'] text-white tracking-tighter leading-none"
                  />
                  {stat.suffix && (
                    <span className="text-3xl md:text-4xl font-black font-['Urbanist'] text-white/60 ml-1 tracking-tighter leading-none">
                      {stat.suffix}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
