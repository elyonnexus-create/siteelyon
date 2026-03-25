import { ReactNode } from 'react';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon?: ReactNode;
}

export function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
  return (
    <div className="service-card">
      {icon && <div className="card-icon">{icon}</div>}
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <ul className="card-features space-y-4">
        {features.map((feature, idx) => (
          <li key={idx} className="feature-item">
            <span className="feature-bullet">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
