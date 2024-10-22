import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import Nostros from "../Componentes/Nosotros";

function QuienesSomos() {
  const navigate = useNavigate();
  const { isLanguageSpanish } = useLanguage();

  return (
    <div className="bg-gradient-to-b from-black to-gray-600 w-auto h-full relative">
      <Header />
      <div className="flex justify-center p-4">
        <h1 className="text-white text-4xl font-mochiy">{isLanguageSpanish ? "¿Quienes somos nosotros?" : "Who are we?"}</h1>
      </div>
      <div className="grid grid-cols-3 gap-8 justify-items-center">
        <Nostros 
          nombre="Alberto Ruiz" 
          oficioEsp="CFO" 
          oficioEng="CFO" 
          src="/alberto.jpg" 
          linkedin="https://www.linkedin.com/in/alberto-ruiz-697941164/" 
        />
        <Nostros 
          nombre="Ramón García" 
          oficioEsp="COO" 
          oficioEng="COO" 
          src="/ramon.jpg" 
          linkedin="https://www.linkedin.com/in/ramongdelprado/" 
        />
        <Nostros 
          nombre="Pablo Lliso" 
          oficioEsp="CEO" 
          oficioEng="CEO" 
          src="/pablo.jpg" 
          linkedin="https://www.linkedin.com/in/pablo-lliso-203847315/" 
        />
        </div>
        <div className="grid grid-cols-2 gap-8 justify-items-center">
        <Nostros 
          nombre="Firas Sabia" 
          oficioEsp="Programador" 
          oficioEng="Coder" 
          src="/firas.jpg" 
          linkedin="https://www.linkedin.com/in/firas-sabia/" 
        />
        <Nostros 
          nombre="Ricardo Montserrat" 
          oficioEsp="Programador" 
          oficioEng="Coder" 
          src="/ricardo2.jpg" 
          linkedin="https://www.linkedin.com/in/ricardo-montserrat-solorzano/" 
        />
      </div>
      <Footer ></Footer>
    </div>
  );
}

export default QuienesSomos;

