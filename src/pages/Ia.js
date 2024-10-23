import { useRef, useState } from "react";
import Header from "../Componentes/Header";
import CameraComponent from "../Componentes/CamaraComponent";
import Popup from "../Componentes/PopUp"; // Importar el componente Popup
import { useLanguage } from "../LanguageContext";

const BASE_URL =
  "https://www.phind.com/search?searchMode=always&allowMultiSearch=false&q=";

function Ia() {
  const { isLanguageSpanish } = useLanguage();
  const [detectedEmotions, setDetectedEmotions] = useState([]);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false); // Estado para gestionar la visibilidad de la cámara
  const [isPopupVisible, setIsPopupVisible] = useState(
    !localStorage.getItem("privacidad")
  ); // Estado para controlar la visibilidad del popup

  const state = useRef({ id: null, score: 0 });
  const [fileContent, setFileContent] = useState("");

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => setFileContent(e.target.result);
    reader.readAsText(file);
  }

  const handleEmotionsDetected = (emotions) => {
    const filteredEmotions = emotions.filter((emotion) => emotion.score > 0.4);
    setDetectedEmotions((prevEmotions) =>
      [...prevEmotions, ...filteredEmotions].slice(-80)
    );
  };

  const calculateAverageScores = () => {
    const emotionMap = {};
    detectedEmotions.forEach((emotion) => {
      if (!emotionMap[emotion.name]) {
        emotionMap[emotion.name] = { total: 0, count: 0 };
      }
      emotionMap[emotion.name].total += emotion.score;
      emotionMap[emotion.name].count += 1;
    });

    const averages = {};
    for (const emotion in emotionMap) {
      averages[emotion] = (
        emotionMap[emotion].total / emotionMap[emotion].count
      ).toFixed(2);
    }

    return averages;
  };

  const averageScores = calculateAverageScores();

  if (averageScores["angry"] > 0.6 && !state.current.id) {
    state.current.score = averageScores["angry"];
    state.current.id = setTimeout(() => {
      if (averageScores["angry"] < state.current.score) return;
      alert("Te veo enojado, te redireccionamos a una explicacion!")
      window.open(
        encodeURI(
          BASE_URL + `\n\nExplicame lo siguiente resumido: ${fileContent}`
        ),
        "_blank"
      );
      state.current.id = null;
      setDetectedEmotions([]);
    }, 3000);
  }

  // Función para alternar la visibilidad de la cámara
  const toggleCamera = () => {
    setIsCameraEnabled((prev) => !prev);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Cerrar el popup
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-600 min-h-screen h-auto w-full p-4 gap-8 flex flex-col items-center justify-center">
      <Header />
      <h1 className="text-white text-6xl">
        {isLanguageSpanish
          ? "Bienvenido a nuestra visión del mundo"
          : "Welcome to our view of the world"}
      </h1>
      <div className="flex">
        {isCameraEnabled && (
          <CameraComponent
            onEmotionsDetected={handleEmotionsDetected}
            isCameraEnabled={isCameraEnabled} // Pasar el estado de la cámara
          />
        )}

        {/* Mostrando la media de emociones */}
        <div
          hidden={!Object.keys(averageScores).length}
          className="mt-4 text-white ml-8"
        >
          <h2 className="text-2xl mb-2">
            {isLanguageSpanish ? "Media de Emociones:" : "Emotion average:"}
          </h2>
          <ul className="space-y-2">
            {Object.entries(averageScores).map(function ([emotion, average]) {
              const dict = {
                happy: ["😂", "🤣"],
                neutral: ["😶", "😶"],
                sad: ["😢", "😭"],
                surprised: ["😯", "😮"],
                angry: ["😡", "🤬"],
                fearful: ["😖", "💀"],
                disgusted: ["😕", "💩"],
              };

              emotion = dict[emotion][+(average > 0.8)];

              return (
                <li key={emotion}>
                  {emotion} - {average}
                </li>
              );
            })}
          </ul>
        </div>
        <pre className="bg-white p-4 rounded">
          {fileContent}
        </pre>
      </div>
      <input type="file" onInput={handleFileChange}></input>
      <button
        onClick={toggleCamera}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        {isCameraEnabled
          ? isLanguageSpanish
            ? "Quitar Cámara"
            : "Camara off"
          : isLanguageSpanish
          ? "Activar Cámara"
          : "Camara on"}
      </button>
      {isPopupVisible && <Popup onClose={handleClosePopup} />}{" "}
    </div>
  );
}

export default Ia;
