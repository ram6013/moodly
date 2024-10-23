import { useEffect, useState, useRef } from "react";
import * as faceapi from "face-api.js";

const WIDTH = 640;
const HEIGHT = 480;

const CameraComponent = ({ onEmotionsDetected, isCameraEnabled }) => {
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const videoUpdateInterval = useRef(null);
  const mediaStreamRef = useRef(null); // Reference for the media stream

  async function initVideo() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
    
    navigator.mediaDevices
      .getUserMedia({ video: { width: WIDTH, height: HEIGHT, deviceId: devices[2].deviceId } })
      .then((stream) => {
        mediaStreamRef.current = stream; // Store the media stream
        videoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error al acceder a la cámara:", error);
      });
  }

  function onPlayVideo() {
    canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
    const displaySize = { width: WIDTH, height: HEIGHT };
    faceapi.matchDimensions(canvasRef.current, displaySize);

    videoUpdateInterval.current = setInterval(async () => {
      if (!videoUpdateInterval.current || !videoRef.current) return;

      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.SsdMobilenetv1Options())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withFaceDescriptors();

      if (detections.length === 0) {
        return;
      }

      const newEmotions = detections.reduce((acc, { expressions: exp }) => {
        Object.keys(exp).forEach((name) => acc.push({ name, score: exp[name] }));
        return acc;
      }, []);

      // Pass the new emotions to the parent component
      onEmotionsDetected(newEmotions);

      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      // Verificar si el canvas y su contexto están disponibles antes de manipularlos
      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext("2d");
        if (context) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          faceapi.draw.drawDetections(canvas, resizedDetections);
          faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
          faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        }
      }
    }, 100);
  }

  useEffect(() => {
    if (isCameraEnabled) {
      Promise.all([
        faceapi.loadSsdMobilenetv1Model("/models"),
        faceapi.loadFaceLandmarkModel("/models"),
        faceapi.loadFaceRecognitionModel("/models"),
        faceapi.loadFaceExpressionModel("/models"),
      ])
        .then(() => {
          setIsLoading(false);
          initVideo(); // Initialize video only if camera is enabled
        })
        .catch((error) => console.error("Error al cargar los modelos:", error));
    }

    return () => {
      clearInterval(videoUpdateInterval.current);
      if (mediaStreamRef.current) {
        const tracks = mediaStreamRef.current.getTracks();
        tracks.forEach((track) => track.stop()); // Stop all tracks in the media stream
      }
    };
  }, [isCameraEnabled]); // Run effect when camera state changes

  const message = !isLoading
    ? "Por favor, activa tu cámara para seguir usando la aplicación!"
    : "Está cargando, por favor espera...";

  return (
    <div className="flex relative justify-center items-center">
      <h1
        hidden={isCameraEnabled && !isLoading}
        className="text-white text-2xl font-mochiy"
      >
        {message}
      </h1>
      <video
        ref={videoRef}
        width={WIDTH}
        height={HEIGHT}
        hidden={!isCameraEnabled || isLoading}
        className="border-2 border-white object-cover"
        onPlay={onPlayVideo}
        autoPlay
        muted
      />
      <canvas ref={canvasRef} style={{ position: "absolute" }} />
    </div>
  );
};

export default CameraComponent;
