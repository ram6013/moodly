import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Componentes/Header";
import { useLanguage } from "../LanguageContext";
function Home() {
  const { isLanguageSpanish } = useLanguage();
  return (
    <div className="bg-gradient-to-b from-black to-gray-600 h-screen w-full p-4 gap-8 flex flex-col items-center justify-center">
      <Header className="absolute top-0 w-full"></Header>
      <h1 className="text-white text-8xl font-mochiy">Moodly</h1>
      <p className="text-white max-w-4xl text-lg">
        {isLanguageSpanish
          ? "Moodly es una aplicación impulsada por IA que ayuda a los profesores a interpretar las emociones de niños, especialmente aquellos con dificultades o problemas de aprendizaje, en tiempo real. A través del análisis de expresiones faciales y lenguaje corporal, Moodly detecta emociones como confusión, frustración o alegría, proporcionando a los educadores insights valiosos para ajustar su enseñanza y mejorar la experiencia en el aula."
          : "Moodly is an AI-powered application that helps teachers interpret the emotions of children, especially those with learning difficulties or challenges, in real time. Through the analysis of facial expressions and body language, Moodly detects emotions such as confusion, frustration, or joy, providing educators with valuable insights to adjust their teaching and enhance the classroom experience."}
      </p>
      <img
        src="class.png"
        className="aspect-square w-[20%] mx-auto"
        alt="Class"
      />
      <button className="bg-white p-5 mt-10 w-[30%] rounded-full shadow-lg font-mochiy hover:bg-gray-300">{isLanguageSpanish? "Pruebala!" : "Try it!"}</button>
    </div>
  );
}

export default Home;
