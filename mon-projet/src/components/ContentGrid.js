import React from 'react';
import DescriptionCard from './DescriptionCard';
import InfoCards from './InfoCards';

const ContentGrid = ({ country, currentCountryKey }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      alignItems: 'center'
    }}>
      <DescriptionCard country={country} />
      <InfoCards country={country} currentCountryKey={currentCountryKey} />
      
      <style jsx>{`
        @media (min-width: 1024px) {
          div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContentGrid;