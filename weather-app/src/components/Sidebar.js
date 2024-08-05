import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Importa el archivo CSS

function Sidebar({ setCity }) {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="sidebar">
      <div className="language-selector">
        <button
          onClick={() => handleLanguageChange('en')}
          className={language === 'en' ? 'selected-language' : 'language'}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange('es')}
          className={language === 'es' ? 'selected-language' : 'language'}
        >
          Español
        </button>
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
