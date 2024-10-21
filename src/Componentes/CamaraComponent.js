import React, { useEffect, useRef } from "react";

const CameraComponent = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const initCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error("Error al acceder a la cámara: ", err);
            }
        };

        initCamera();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className="flex justify-center items-center">
            <video
                ref={videoRef}
                className="border-2 border-white w-80 h-60 object-cover"
                autoPlay
            />
        </div>
    );
};

export default CameraComponent;
