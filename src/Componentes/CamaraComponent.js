import { useEffect, useState, useRef } from "react";
import * as faceapi from "face-api.js";

const WIDTH = 640;
const HEIGHT = 480;

const CameraComponent = () => {
    const [isCameraEnabled, setIsCameraEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    function initVideo() {
        navigator.mediaDevices.getUserMedia({ video: { width: WIDTH, height: HEIGHT } }).then((stream) => {
            videoRef.current.srcObject = stream;
            setIsCameraEnabled(true);
        }).catch((error) => {
            console.error("Error al acceder a la cámara:", error);
        });
    }

    useEffect(() => {
        Promise.all([
            faceapi.loadSsdMobilenetv1Model("/models"),
            faceapi.loadFaceLandmarkModel("/models"),
            faceapi.loadFaceRecognitionModel("/models"),
            faceapi.loadFaceExpressionModel("/models"),
        ]).then(() => {
            setIsLoading(false);
            initVideo();
        }).catch((error) => {
            console.error("Error al cargar los modelos:", error);
        })

        videoRef.current.addEventListener("play", () => {
            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);

            const displaySize = { width: WIDTH, height: WIDTH };
            faceapi.matchDimensions(canvasRef.current, displaySize);

            setInterval(async () => {
                const detections = await faceapi
                    .detectAllFaces(videoRef.current, new faceapi.SsdMobilenetv1Options())
                    .withFaceLandmarks()
                    .withFaceExpressions();

                console.log(detections);

                if (detections.length === 0) {
                    return;
                }

                const resizedDetections = faceapi.resizeResults(detections, displaySize);
                canvasRef.current.getContext("2d").clearRect(0, 0, WIDTH, HEIGHT);

                faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
                faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
                faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
            }, 100);
        });
    }, []);

    const message = !isLoading ? "Por favor, activa tu cámara para seguir usando la aplicacion!" : "Esta cargando, por favor espera...";

    return (
        <div className="flex justify-center items-center">
            <h1 hidden={isCameraEnabled && !isLoading} className="text-white text-2xl font-mochiy">{message}</h1>
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
        </div>
    );
};

export default CameraComponent;
