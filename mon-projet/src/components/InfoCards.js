import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Building } from 'lucide-react';
import { countries } from '../data/CountriesData';

const InfoCards = ({ country, currentCountryKey }) => {
  const navigate = useNavigate();

  const handleQuickNavigation = (countryKey) => {
    navigate(`/country/${countryKey}`);
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(16px)',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem'
  };

  const iconStyle = {
    height: '1.5rem',
    width: '1.5rem',
    color: 'white'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'white'
  };

  const textStyle = {
    color: 'white',
    fontSize: '1.125rem'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Best Time Card */}
      <div style={cardStyle}>
        <div style={headerStyle}>
          <Calendar style={iconStyle} />
          <h3 style={titleStyle}>Best Time to Visit</h3>
        </div>
        <p style={textStyle}>{country.bestTime}</p>
      </div>

      {/* Currency & Language Card */}
      <div style={cardStyle}>
        <div style={headerStyle}>
          <Building style={iconStyle} />
          <h3 style={titleStyle}>Currency & Language</h3>
        </div>
        <p style={{ ...textStyle, marginBottom: '0.5rem' }}>{country.currency}</p>
        <p style={textStyle}>{country.language}</p>
      </div>

      {/* Call to Action Card */}
      <div style={{
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2), transparent)',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1rem'
        }}>
          Ready to Explore?
        </h3>
        <button
          style={{
            backgroundColor: 'white',
            color: '#111827',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            transform: 'scale(1)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Plan Your Journey
        </button>
      </div>

      {/* Quick Navigation Card */}
      <div style={cardStyle}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: 'white',
          marginBottom: '1rem'
        }}>
          Explore Other Countries
        </h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          {Object.keys(countries).filter(c => c !== currentCountryKey).map((countryKey) => (
            <button
              key={countryKey}
              onClick={() => handleQuickNavigation(countryKey)}
              style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '9999px',
                color: 'white',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              {countries[countryKey].name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCards;