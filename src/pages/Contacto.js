import React from "react";
import Header from "../Componentes/Header";
import { useLanguage } from "../LanguageContext";
import Footer from "../Componentes/Footer";

function Contacto() {
  const { isLanguageSpanish } = useLanguage();
  return (
    <div className="bg-gradient-to-b from-black to-gray-600 h-screen w-auto p-4 gap-8 flex flex-col items-center justify-center relative">
      <Header></Header> 
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-white text-7xl mt-16 font-mochiy">
          {isLanguageSpanish ? "¡Contáctanos!" : "Contact us!"}
        </h1>

        <div className="flex flex-col w-[50%] justify-center h-auto p-6 mt-10">
          <label className="text-white mb-2">{isLanguageSpanish ? "Escriba su correo:" : "Write your email:"}</label>
          <textarea className="w-full h-16 p-2 mb-4 border border-gray-300 rounded"></textarea>

          <label className="text-white mb-2">{isLanguageSpanish ?"Comentarios:" : "Comments: "}</label>
          <textarea
            className="w-full h-48  border border-gray-300 rounded"
            placeholder={isLanguageSpanish
                ?"Escriba aquí sus comentarios..."
                :"Write your coments here..."
            }
          ></textarea>

          <div className="flex justify-center">
            <button className="bg-white p-5 mt-10 w-[30%] rounded-full shadow-lg font-mochiy hover:bg-gray-300">{isLanguageSpanish? "Enviar" : "Send"}</button>
          </div>
        </div>
      </div>
      <div className="w-full">
      <Footer></Footer>
      </div>
    </div>
  );
}

export default Contacto;
