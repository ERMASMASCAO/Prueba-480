import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

function Sidebar({ setCity }) {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div style={{ width: '200px', padding: '10px', borderRight: '1px solid #ddd' }}>
      <div>
        <button onClick={() => handleLanguageChange('en')} style={{ fontWeight: language === 'en' ? 'bold' : 'normal' }}>English</button>
        <button onClick={() => handleLanguageChange('es')} style={{ fontWeight: language === 'es' ? 'bold' : 'normal' }}>Español</button>
      </div>
      <div>
        <h3>Choose City</h3>
        <button onClick={() => setCity('London')}>London</button>
        <button onClick={() => setCity('Toronto')}>Toronto</button>
        <button onClick={() => setCity('Singapore')}>Singapore</button>
        <Link to="/contact">Contact Form</Link>
      </div>
    </div>
  );
}

export default Sidebar;
