import React, { createContext, useState, useContext } from 'react';

// Create a Context object for language settings
const LanguageContext = createContext();

/**
 * LanguageProvider Component
 * 
 * This component provides the language context to its children. It maintains the current language state
 * and provides a way to update it. Any child component can consume this context to access or modify
 * the language setting.
 * 
 * @param {Object} props - React props object
 * @param {React.ReactNode} props.children - The child components that will have access to the language context
 * 
 * @returns {React.ReactElement} - A provider component that wraps its children with the LanguageContext.Provider
 */
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Default language is English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * useLanguage Hook
 * 
 * A custom hook that allows components to consume the language context. It returns the current language
 * and the function to update it, making it easier to use the context in functional components.
 * 
 * @returns {Object} - An object containing the current language and the setLanguage function
 */
export function useLanguage() {
  return useContext(LanguageContext);
}
