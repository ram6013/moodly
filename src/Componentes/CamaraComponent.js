import { useEffect, useState, useRef } from "react";
import * as faceapi from "face-api.js";

const WIDTH = 640;
const HEIGHT = 480;

const CameraComponent = () => {
    const [isCameraEnabled, setIsCameraEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const detectionInterval = useRef(null)

    const [emotionsHistory, setEmotionsHistory] = useState([]);
    const [emotionList, setEmotionList] = useState([]);

    function initVideo() {
        navigator.mediaDevices
            .getUserMedia({ video: { width: WIDTH, height: HEIGHT } })
            .then((stream) => {
                videoRef.current.srcObject = stream;
                setIsCameraEnabled(true);
            })
            .catch((error) => console.error("Error al acceder a la cámara:", error));
    }

    function onPlayCamera() {
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);

        const displaySize = { width: WIDTH, height: WIDTH };
        faceapi.matchDimensions(canvasRef.current, displaySize);

        clearInterval(detectionInterval.current);
        detectionInterval.current = setInterval(async () => {
            if (!videoRef.current) return;

            const detections = await faceapi
                .detectAllFaces(videoRef.current, new faceapi.SsdMobilenetv1Options())
                .withFaceLandmarks()
                .withFaceExpressions();

            if (detections.length === 0) {
                setEmotionList([]);
                return;
            }

            const d = detections[0];
            console.log(d);

            // I can center pieces of the face to an axis, and assure is approximate to another one
            // d.landmarks.getRightEyeBrow()

            // Remove closests one that disappear to the border of the camera,
            // and verify is not closest to any other of the last frame

            // Pick main points of certain part, center it, and check that is the same

            // Maybe use age and gender to filter.
            // Look at face descriptors to verify.

            const ids = ['Juan', 'Pedro', 'Maria'];

            const emotions = [];
            detections.forEach(({ expressions: expr }, i) => {
                const emotion = Object.keys(expr).reduce((a, b) => expr[a] > expr[b] ? a : b);
                emotions.push({ id: ids[i % ids.length], name: emotion, score: expr[emotion] });
            });

            setEmotionList(old => {
                if (old.length > 0) setEmotionsHistory(curr => [...curr, old]);
                return emotions;
            });

            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvasRef.current.getContext("2d").clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

            faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
            faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
        }, 100);
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
        }).catch((error) => console.error("Error al cargar los modelos:", error));

        return () => clearInterval(detectionInterval.current);
    }, []);

    const message = !isLoading
        ? "Por favor, activa tu cámara para seguir usando la aplicacion!"
        : "Esta cargando, por favor espera...";

    const history = emotionsHistory.reduce((all, detected) => {
        const currList = all[detected.id] ?? [];
        currList.push({ name: detected.name, score: detected.score });

        all[detected.id] = currList;
        return all;
    }, {});

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
                width={WIDTH} height={HEIGHT}
                hidden={!isCameraEnabled || isLoading}
                onPlay={onPlayCamera}
                className="border-2 border-white object-cover"
                autoPlay muted
            />
            <canvas ref={canvasRef} style={{ position: "absolute" }} />
            <ul className="absolute top-2 text-black left-2">
                {emotionList.map((e, i) => <li key={i}>{e.id} - {e.name} - {e.score}</li>)}
            </ul>
            <ul className="absolute top-2 text-black right-2">
                {Object.keys(history).map((id, i) => <li key={i}>{id} - {history[id].map(e => `${e.name}:${e.score}`).join(", ")}</li>)}
            </ul>
        </div>
    );
};

export default CameraComponent;
