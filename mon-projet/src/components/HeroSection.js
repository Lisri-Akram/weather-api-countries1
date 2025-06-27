import React from 'react';
import { MapPin, Users } from 'lucide-react';

const HeroSection = ({ country }) => {
  return (
    <div style={{
      textAlign: 'center',
      marginBottom: '4rem'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1.5rem',
        animation: 'fadeIn 1s ease-in-out'
      }}>
        {country.name}
      </h1>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        color: 'white',
        fontSize: '1.125rem',
        marginBottom: '2rem'
      }}>
        <MapPin style={{
          height: '1.25rem',
          width: '1.25rem'
        }} />
        <span>{country.location}</span>
        <span style={{ margin: '0 0.5rem' }}>•</span>
        <Users style={{
          height: '1.25rem',
          width: '1.25rem'
        }} />
        <span>{country.population}</span>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (min-width: 768px) {
          h1 {
            font-size: 4.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;