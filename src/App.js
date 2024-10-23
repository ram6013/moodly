import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import { LanguageProvider } from './LanguageContext';
import Contacto from './pages/Contacto';
import Ia from './pages/Ia';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';
import Camara from './pages/Camara';
import Class from './pages/Class';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path='/User' element={<Ia/>}/>
          <Route path='/PoliticaPrivacidad' element={<PoliticaPrivacidad/>}/>
          <Route path='/PoliticaCookies' element={<PoliticaCookies/>}/>
          <Route path='Camara' element={<Camara/>}/>
          <Route path='Class' element={<Class/>}></Route>
          </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
