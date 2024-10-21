import { useNavigate } from "react-router-dom";
import Header from "../Componentes/Header";
function QuienesSomos(){
    const navigate = useNavigate();
    const handleNavigateHome = () => {
      navigate("/"); 
    };
    return(
    <div className="bg-gradient-to-b from-black to-gray-600 h-screen w-auto p-4 ">
    <Header className = "absolute top-0 w-full"></Header>
    <div className="flex justify-center "><h1 className="text-white text-4xl">Esto es Quienes Somos</h1></div>
    </div>  
    )
}
export default QuienesSomos