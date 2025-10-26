import { createContext, useContext, useState, useEffect } from 'react';
import { ru } from '../hooks/languages/ru';
import { en } from '../hooks/languages/en';

const translations = { ru, en };
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru');

  useEffect(() => {
    const savedLang = localStorage.getItem('swim-school-lang');
    if (savedLang) setLanguage(savedLang);
  }, []);

  const switchLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('swim-school-lang', newLang);
  };

  const t = (key) => translations[language]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ t, language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};