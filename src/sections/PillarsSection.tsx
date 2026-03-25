
import { ServiceCard } from '../components/ServiceCard';
import { Crosshair, Globe, Bot, TrendingUp } from 'lucide-react';
import './PillarsSection.css';

export function PillarsSection() {
  const pillars = [
    {
      title: "Branding Estratégico",
      description: "Construção de marca premium focada em percepção de valor.",
      icon: <Crosshair size={32} />,
      features: [
        "Posicionamento",
        "Identidade visual",
        "Construção de marca premium"
      ]
    },
    {
      title: "Websites Profissionais",
      description: "Sites de alta conversão contruídos para experiências memoráveis.",
      icon: <Globe size={32} />,
      features: [
        "Sites de alta conversão",
        "Experiência premium",
        "Estrutura para vendas"
      ]
    },
    {
      title: "Automação com IA",
      description: "Redução de custos operacionais com atendimentos inteligentes.",
      icon: <Bot size={32} />,
      features: [
        "Atendimento automático",
        "IA para suporte ao cliente",
        "Fluxos inteligentes de resposta",
        "Redução de custo operacional"
      ]
    },
    {
      title: "Crescimento e Escala",
      description: "Aumento de conversão através de processos otimizados e funis ágeis.",
      icon: <TrendingUp size={32} />,
      features: [
        "Otimização de processos",
        "Funil automatizado",
        "Integrações com sistemas",
        "Aumento de conversão"
      ]
    }
  ];

  return (
    <section id="servicos" className="pillars-section">
      <div className="container-premium">
        <div className="pillars-header">
          <h2 className="section-title">Nossos Pilares</h2>
          <p className="section-subtitle">
            A fundação para um negócio que não apenas parece, mas opera como líder.
          </p>
        </div>
        
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <ServiceCard 
              key={index}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              features={pillar.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
