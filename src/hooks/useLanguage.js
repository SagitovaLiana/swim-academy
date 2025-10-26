
import { useState, useEffect } from 'react';
import { ru } from './languages/ru';
import { en } from './languages/en';

const translations = { ru, en };

let globalLanguage = 'ru';
let listeners = [];

const notifyListeners = () => {
  listeners.forEach(listener => listener());
};

export const useLanguage = () => {
  const [language, setLanguage] = useState(globalLanguage);

  useEffect(() => {
    const savedLang = localStorage.getItem('swim-school-lang');
    if (savedLang) {
      globalLanguage = savedLang;
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    // Добавляем слушатель
    const listener = () => setLanguage(globalLanguage);
    listeners.push(listener);
    
    // Убираем слушатель при размонтировании
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  const switchLanguage = (newLang) => {
    globalLanguage = newLang;
    localStorage.setItem('swim-school-lang', newLang);
    notifyListeners(); // Уведомляем все компоненты
  };

  const t = (key) => translations[language]?.[key] || key;

  return { t, language, switchLanguage };
};