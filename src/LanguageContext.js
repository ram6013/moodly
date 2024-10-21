import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isLanguageSpanish, setLanguageSpanish] = useState(true);

  const toggleLanguageToSpanish = () => setLanguageSpanish(true);
  const toggleLanguageToEnglish = () => setLanguageSpanish(false);

  return (
    <LanguageContext.Provider value={{ isLanguageSpanish, toggleLanguageToSpanish, toggleLanguageToEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
