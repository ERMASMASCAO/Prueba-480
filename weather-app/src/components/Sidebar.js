import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

function Sidebar({ setCity }) {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.languageSelector}>
        <button
          onClick={() => handleLanguageChange('en')}
          style={language === 'en' ? styles.selectedLanguage : styles.language}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange('es')}
          style={language === 'es' ? styles.selectedLanguage : styles.language}
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

const styles = {
  sidebar: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '200px',
    padding: '10px',
    borderLeft: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
  },
  languageSelector: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '10px',
  },
  language: {
    margin: '0 5px',
    padding: '5px 10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  selectedLanguage: {
    margin: '0 5px',
    padding: '5px 10px',
    border: '1px solid #007bff',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Sidebar;
