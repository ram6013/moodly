import React, { useEffect, useState, useRef } from 'react';
import * as faceapi from 'face-api.js';

const WIDTH = 640;
const HEIGHT = 480;

const FaceAndEmotionRecognition = () => {
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const ref = useRef(null);
  
  // Lista de emociones actuales
  const [emotionList, setEmotionList] = useState([]);
  
  // Iniciar la cámara web
  function initVideo() {
    navigator.mediaDevices
      .getUserMedia({ video: { width: WIDTH, height: HEIGHT } })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setIsCameraEnabled(true);
      })
      .catch((error) => {
        console.error('Error al acceder a la cámara:', error);
      });
  }
  
  useEffect(() => {
    // Cargar los modelos
    const loadModels = async () => {
      await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
      await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
      await faceapi.nets.faceExpressionNet.loadFromUri('/models');
      
      setIsLoading(false);
      initVideo();
    };
    
    loadModels();
    
    // Añadir el evento play al video
    videoRef.current.addEventListener('play', () => {
      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
      
      const displaySize = { width: WIDTH, height: HEIGHT };
      faceapi.matchDimensions(canvasRef.current, displaySize);
      
      ref.current = setInterval(async () => {
        const detections = await faceapi.detectAllFaces(
          videoRef.current, 
          new faceapi.SsdMobilenetv1Options()
        )
          .withFaceLandmarks()
          .withFaceExpressions();
        
        console.log(detections);
        
        setEmotionList([]);
        
        if (detections.length > 0) {
          for (const detection of detections) {
            let currentBest = { name: '', score: 0 };
            for (const emotion of Object.keys(detection.expressions)) {
              const score = detection.expressions[emotion];
              if (currentBest.score < score) {
                currentBest = { name: emotion, score: score };
              }
            }
            setEmotionList((prev) => [...prev, currentBest]);
          }
          
          const resizedDetections = faceapi.resizeResults(detections, displaySize);
          
          canvasRef.current
            .getContext('2d')
            .clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          
          faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
          faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
          faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
        }
      }, 100);
    });
    
    return () => clearInterval(ref.current);
  }, []);
  
  const message = !isLoading
    ? 'Por favor, activa tu cámara para seguir usando la aplicación!'
    : 'Cargando, por favor espera...';

  return (
    <div className="flex relative justify-center items-center">
      <h1 hidden={isCameraEnabled && !isLoading} className="text-white text-2xl font-mochiy">
        {message}
      </h1>
      <video
        ref={videoRef}
        width={WIDTH}
        height={HEIGHT}
        hidden={!isCameraEnabled || isLoading}
        className="border-2 border-white object-cover"
        autoPlay
        muted
      />
      <canvas ref={canvasRef} style={{ position: 'absolute' }} />
      
      <ul className="absolute top-2 text-black left-2">
        {emotionList.map((e, i) => (
          <li key={i}>
            {e.name} - {e.score.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaceAndEmotionRecognition;