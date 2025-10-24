// hooks/useLanguage.js
import { useState, useEffect } from 'react';
import { ru } from './languages/ru';
import { en } from './languages/en';

const translations = { ru, en };
export const useLanguage = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('swim-school-lang');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const switchLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('swim-school-lang', newLang);
  };

  const t = (key) => translations[language][key] || key;

  return { t, language, switchLanguage };
};