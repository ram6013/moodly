import React, { useState } from "react";
import Header from "../Componentes/Header";
import CameraComponent from "../Componentes/CamaraComponent";
import Popup from "../Componentes/PopUp"; // Importar el componente Popup

function Ia() {
  const [detectedEmotions, setDetectedEmotions] = useState([]);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false); // Estado para gestionar la visibilidad de la cámara
  const [isPopupVisible, setIsPopupVisible] = useState(true); // Estado para controlar la visibilidad del popup

  const handleEmotionsDetected = (emotions) => {
    const filteredEmotions = emotions.filter(emotion => emotion.score > 0.6);
    setDetectedEmotions((prevEmotions) => [
      ...prevEmotions,
      ...filteredEmotions,
    ]);
  };

  const calculateAverageScores = () => {
    const emotionMap = {};
    detectedEmotions.forEach(emotion => {
      if (!emotionMap[emotion.name]) {
        emotionMap[emotion.name] = { total: 0, count: 0 };
      }
      emotionMap[emotion.name].total += emotion.score;
      emotionMap[emotion.name].count += 1;
    });

    const averages = {};
    for (const emotion in emotionMap) {
      averages[emotion] = (emotionMap[emotion].total / emotionMap[emotion].count).toFixed(2);
    }

    return averages;
  };

  const averageScores = calculateAverageScores();

  // Función para alternar la visibilidad de la cámara
  const toggleCamera = () => {
    setIsCameraEnabled((prev) => !prev);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Cerrar el popup
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-600 h-screen w-full p-4 gap-8 flex flex-col items-center justify-center">
      <Header />
      <h1 className="text-white text-6xl">Bienvenido a nuestra visión del mundo</h1>

      <div className="flex">
        {isCameraEnabled && (
          <CameraComponent 
            onEmotionsDetected={handleEmotionsDetected} 
            isCameraEnabled={isCameraEnabled} // Pasar el estado de la cámara
          />
        )}

        {/* Mostrando la media de emociones */}
        <div className="mt-4 text-white ml-8">
          <h2 className="text-2xl mb-2">Media de Emociones:</h2>
          <ul className="space-y-2">
            {Object.entries(averageScores).map(([emotion, average]) => (
              <li key={emotion}>
                {emotion} - {average}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button 
        onClick={toggleCamera} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        {isCameraEnabled ? "Quitar Cámara" : "Activar Cámara"}
      </button>

      {isPopupVisible && <Popup onClose={handleClosePopup} />} {/* Mostrar el popup si es visible */}
    </div>
  );
}

export default Ia;
