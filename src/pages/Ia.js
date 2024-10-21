import React from "react";
import Header from "../Componentes/Header";
import CameraComponent from "../Componentes/CamaraComponent";

function Ia(){
    return(
        <div className="bg-gradient-to-b from-black to-gray-600 h-screen w-full p-4 gap-8 flex flex-col items-center justify-center">
            <Header></Header>
            <h1 className="text-white text-6xl">Bienvenido a nuestra visión del mundo</h1>
            <CameraComponent></CameraComponent>
        </div>
    )
}
export default Ia;