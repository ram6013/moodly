import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import { LanguageProvider } from './LanguageContext';
import Contacto from './pages/Contacto';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
