import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Qual o prazo médio para ter um agente funcionando?",
    answer: "Os primeiros resultados aparecem em até 30 dias. Trabalhamos com entrega progressiva: o agente já opera e aprende desde a primeira semana. Você não espera tudo pronto para começar a ver valor."
  },
  {
    question: "Preciso ter conhecimento técnico?",
    answer: "Não. Você foca no seu negócio, nós cuidamos de toda a arquitetura, integração e configuração. Entregamos o sistema funcionando e treinamos sua equipe para operar com autonomia."
  },
  {
    question: "Como garantem que o agente vai ter a alma da minha marca?",
    answer: "Cada agente é desenvolvido a partir de um processo de imersão no seu negócio. Estudamos seu tom, vocabulário e valores. O resultado não é um robô genérico, é uma extensão genuína da sua marca."
  },
  {
    question: "Vocês atendem empresas de todos os setores?",
    answer: "Nosso foco atual são restaurantes, negócios de recorrência, clínicas e comércio digital. Dentro dessas verticais, temos dados reais de resultado, o que nos permite prometer com responsabilidade, não com esperança."
  },
  {
    question: "O que diferencia a Elyon Nexus de outras empresas de IA?",
    answer: "Ferramentas qualquer um entrega. O que é difícil de encontrar é alguém que fica presente até o resultado aparecer de verdade."
  },
  {
    question: "Como funciona o acompanhamento após a entrega?",
    answer: "O projeto não termina no lançamento. Acompanhamos os primeiros 30 dias com ajustes contínuos. Para clientes em recorrência, estamos presentes mensalmente, evoluindo o sistema junto com o crescimento do seu negócio."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-[var(--section-py)]"
    >
      <div className="container-narrow">

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
              FAQ
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h1 text-white mb-5 tracking-tight leading-tight"
          >
            Perguntas frequentes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-base md:text-lg max-w-[520px] mx-auto leading-relaxed"
          >
            As mesmas que todos tinham — antes de começar.
          </motion.p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  borderTop: i === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none'
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '22px 0',
                    gap: 16,
                    textAlign: 'left'
                  }}
                >
                  <span
                    className="text-body-base font-semibold transition-colors duration-200"
                    style={{
                      color: isOpen ? '#fff' : 'rgba(255, 255, 255, 0.4)',
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* +/– icon */}
                  <div
                    style={{
                      flexShrink: 0,
                      color: '#fff',
                      fontSize: 22,
                      fontWeight: 300,
                      lineHeight: 1,
                      transition: 'color 0.2s ease',
                      width: 24,
                      textAlign: 'center'
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="text-body-base text-white/70 pb-6 max-w-[660px]"
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
