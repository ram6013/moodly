import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext'; 

function Header() {
  const { isLanguageSpanish, toggleLanguageToSpanish, toggleLanguageToEnglish } = useLanguage();
  const navigate = useNavigate();

  const handleNavigate = (destiny) => {
    navigate(`/${destiny}`);
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex justify-between">
        <button onClick={() => handleNavigate("")} className="text-white text-2xl ml-2 transition-transform duration-200 hover:scale-110 font-mochiy">
          Moodly
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => handleNavigate("QuienesSomos")} className="text-white hover:underline">
          {isLanguageSpanish ? "¿Quiénes somos?" : "Who are we?"}
        </button>
        <button className="text-white hover:underline">
          {isLanguageSpanish ? "Contacto" : "Contact"}
        </button>
        <button className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-600">
          {isLanguageSpanish ? "Únete" : "Join us"}
        </button>
        
        <button onClick={toggleLanguageToSpanish} className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center">
          <img src="esp.png" alt="Español" className="h-full w-full object-cover" />
        </button>
        <button onClick={toggleLanguageToEnglish} className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center">
          <img src="eng.png" alt="English" className="h-full w-full object-cover" />
        </button>
      </div>
    </div>
  );
}

export default Header;
