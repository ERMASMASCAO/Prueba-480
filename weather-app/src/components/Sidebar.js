import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import './Sidebar.css';

/**
 * Sidebar Component
 * 
 * This component renders a sidebar with language selection options, city selection buttons,
 * and a link to a contact form. It utilizes the `useLanguage` hook to manage the application's
 * current language and allows the user to select a city from predefined options.
 * 
 * @param {function} setCity - A function passed as a prop to update the selected city.
 */
function Sidebar({ setCity }) {
  // Destructure the current language and the function to set the language from the context
  const { language, setLanguage } = useLanguage();

  /**
   * handleLanguageChange - Function to handle the change of language.
   * 
   * Updates the application's language by calling the `setLanguage` function from the context.
   * 
   * @param {string} lang - The language code ('en' or 'es') to set the application's language.
   */
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="sidebar">
      {/* Language Selector */}
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

      {/* City Selection */}
      <div>
        <h3>Choose City</h3>
        <button onClick={() => setCity('London')}>London</button>
        <button onClick={() => setCity('Toronto')}>Toronto</button>
        <button onClick={() => setCity('Singapore')}>Singapore</button>
        
        {/* Link to the Contact Form */}
        <Link to="/contact">Contact Form</Link>
      </div>
    </div>
  );
}

export default Sidebar;
