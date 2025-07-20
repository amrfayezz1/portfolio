import React from 'react';
import { Card, CardFront, CardBack } from '../Card/Card';
import { Service } from '../../types';
import './ServiceCard.css';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="service-card" animationDelay={service.delay}>
      <CardFront>
        <div className="service-icon">
          <i className={service.icon}></i>
        </div>
        <h3>{service.title}</h3>
      </CardFront>
      <CardBack>
        <p>{service.description}</p>
      </CardBack>
    </Card>
  );
};