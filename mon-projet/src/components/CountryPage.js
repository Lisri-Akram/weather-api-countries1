import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { countries } from '../data/CountriesData';
import HeroSection from './HeroSection';
import ContentGrid from './ContentGrid';

const API_KEY = process.env.REACT_APP_API_KEY;

const CountryPage = () => {
  const { countryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [capital, setCapital] = useState('zak');

  const currentCountry = countries[countryName];
 




  // Fetch weather for capital city and Set capital when country changes 
  useEffect(() => {

      if (!currentCountry) {
    return <Navigate to="/country/France" replace />; // Redirect if country not found
  }
    if (!capital) return; 
    setCapital(currentCountry.capital || countryName);   
    setIsLoading(false);

    const fetchWeather = async () => {
      try {
        setWeather(null);
        setError(null);
        setIsLoading(true);
        

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}&units=metric`
        );

        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }

        const data = await res.json();
        setWeather({
          name: data.name, // added recently
          wind: data.wind.deg,//same
          temp: data.main.temp,//same
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [currentCountry, countryName,capital]);

  return (
    <div
      style={{
        minHeight: '100vh',
        transition: 'all 1s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        background: currentCountry.background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 208, 255, 0.2)',
        }}
      ></div>

      <main
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '3rem 1rem',
        }}
      >
        <div
          style={{
            transition: 'all 0.5s ease',
            opacity: isLoading ? 0 : 1,
            transform: isLoading ? 'translateY(1rem)' : 'translateY(0)',
          }}
        >
          <HeroSection country={currentCountry} />

          <div className="weather-card" style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '1rem', margin: '2rem 0', textAlign: 'center' }}>
            <h3>Weather in {capital}</h3>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {weather ? (
              <>
                <p>{weather.description}</p>
                <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="icon" />
                <p>{weather.temp}°C</p>
              </>
            ) : (
              <p>Loading weather...</p>
            )}
          </div>

          <ContentGrid country={currentCountry} currentCountryKey={countryName} />
        </div>
      </main>

      <div style={bubbleStyle(25, '2.5rem', '5rem')}></div>
      <div style={{ ...bubbleStyle(75, '2.5rem', '4rem'), animationDelay: '2s' }}></div>
      <div style={{ ...bubbleStyle(50, '25%', '3rem'), animationDelay: '2s' }}></div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

const bubbleStyle = (pos, offset, size) => ({
  position: 'absolute',
  top: typeof pos === 'number' ? `${pos}%` : pos,
  left: offset,
  width: size,
  height: size,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '50%',
  animation: 'pulse 3s infinite',
});

export default CountryPage;
