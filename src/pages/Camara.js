import React from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import { useLanguage } from "../LanguageContext";
import { useNavigate } from "react-router-dom";
function Camara() {
  const navigate = useNavigate();
  const handleNavigate = (destiny) => {
    navigate(`/${destiny}`);
  };
  const { isLanguageSpanish } = useLanguage();
  return (
    <div className="bg-gradient-to-b from-black to-gray-600 min-h-screen h-auto w-full p-4 gap-8 flex flex-col items-center justify-center">
      <Header></Header>
      <div className="flex flex-col">
        <h1 className="text-6xl text-white">
          {isLanguageSpanish
            ? "Antes de empezar, ¿eres usuario individual o clase?"
            : "Are you user or class?"}
        </h1>
        <div className="flex justify-around  m-8">
          <button onClick={()=>handleNavigate("User")}className="bg-white p-5 mt-10 w-[30%] rounded-full shadow-lg font-mochiy hover:bg-gray-300">
            {isLanguageSpanish ? "Usuario!" : "User"}
          </button>
          <button onClick={()=>handleNavigate("Class")} className="bg-white p-5 mt-10 w-[30%] rounded-full shadow-lg font-mochiy hover:bg-gray-300">
            {isLanguageSpanish ? "Clase" : "Class"}
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Camara;
