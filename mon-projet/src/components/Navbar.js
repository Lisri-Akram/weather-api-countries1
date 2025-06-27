import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Mountain } from 'lucide-react';
import { countries } from '../data/CountriesData';

const Navbar = () => {
  const navigate = useNavigate();
  const { countryName } = useParams();

  // back Japan if invalid or unexisting
  const currentKey = countries[countryName] ? countryName : 'japan';
  const currentCountry = countries[currentKey];
  const themeColor = currentCountry.themeColor;

  const handleCountryChange = (key) => {
    navigate(`/country/${key}`);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav style={{
        backgroundColor: themeColor,
        position: 'relative',
        zIndex: 30,
        borderBottom: '1px solid rgba(255,255,255,0.2)'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4rem'
          }}>
            <div style={{ display: 'flex',alignItems: 'center', gap: '0.5rem' }}>
              <Mountain style={{ color: 'white', height: '2rem', width: '2rem' }} />
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>
                World Explorer
              </span>
            </div>
            <div className="md:block" style={{ display: 'none' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {Object.keys(countries).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleCountryChange(key)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      backgroundColor: currentKey === key ? 'rgba(255,255,255,0.2)' : 'transparent',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (currentKey !== key)
                        e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      if (currentKey !== key)
                        e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    {countries[key].name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden" style={{ backgroundColor: themeColor, zIndex: 20 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent:'space-around',
          gap: '0.2rem',
          position: 'sticky', 
          top: '0',
          left: '0',
          width: '100%',
          zIndex:'1000',
          padding: '1rem',
        }}>
          {Object.keys(countries).map((key) => (
            <button
              key={key}
              onClick={() => handleCountryChange(key)}
              style={{
                padding: '0.5rem 0.75rem',
                borderRadius: '0.375rem',
                fontSize: '1rem',
                fontWeight: 500,
                textAlign: 'left',
                backgroundColor: currentKey === key ? 'rgba(255,255,255,0.2)' : themeColor,
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (currentKey !== key)
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                if (currentKey !== key)
                  e.target.style.backgroundColor = themeColor;
              }}
            >
              {countries[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* Current Route Display */}
      <div style={{
        backgroundColor: themeColor,
        color: 'white',
        textAlign: 'center',
        padding: '0.5rem 0',
        fontSize: '0.875rem',
        zIndex: 20
      }}>
        Current Route: <span style={{ // current route indicator under the nav bar
          fontFamily: 'monospace',
          backgroundColor: 'rgba(255,255,255,0.2)',
          padding: '0.25rem 0.5rem',
          borderRadius: '0.25rem'
        }}> /country/{currentKey}</span>
      </div>
    </>
  );
};

export default Navbar;
