import React from 'react';

const DescriptionCard = ({ country }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(16px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    }}>
      <h2 style={{
        fontSize: '1.875rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1.5rem'
      }}>
        Discover {country.name}
      </h2>
      <p style={{
        color: 'white',
        fontSize: '1.125rem',
        lineHeight: '1.625',
        marginBottom: '2rem'
      }}>
        {country.description}
      </p>
      
      {/* Highlights */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: 'white',
          marginBottom: '1rem'
        }}>
          Must-See Attractions
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem'
        }}>
          {country.highlights.map((highlight, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                padding: '0.75rem',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: '500',
                textAlign: 'center'
              }}
            >
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;