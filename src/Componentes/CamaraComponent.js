import { useEffect, useState, useRef } from "react";
import * as faceapi from "face-api.js";

const WIDTH = 640;
const HEIGHT = 480;

const CameraComponent = () => {
    const [isCameraEnabled, setIsCameraEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef(null);

    function initVideo() {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            videoRef.current.srcObject = stream;
            setIsCameraEnabled(true);
        }).catch((error) => {
            console.error("Error al acceder a la cámara:", error);
        });
    }

    useEffect(() => {
        Promise.all([
            faceapi.loadTinyFaceDetectorModel("/models"),
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
            const canvas = faceapi.createCanvas(videoRef.current);
            document.body.append(canvas);

            const displaySize = { width: WIDTH, height: WIDTH };
            faceapi.matchDimensions(canvas, displaySize);

            setInterval(async () => {
                const detections = await faceapi
                    .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions({
                        scoreThreshold: 0.1
                    }))
                    .withFaceLandmarks()
                    .withFaceExpressions();

                if (detections.length === 0) {
                    return;
                }

                const resizedDetections = faceapi.resizeResults(detections, displaySize);
                // canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

                faceapi.draw.drawDetections(canvas, resizedDetections);
                faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
                faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
            }, 100);
        })
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
        </div>
    );
};

export default CameraComponent;
