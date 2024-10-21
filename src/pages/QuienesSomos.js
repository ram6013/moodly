import { useNavigate } from "react-router-dom";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
function QuienesSomos(){
    const navigate = useNavigate();
    const handleNavigateHome = () => {
      navigate("/"); 
    };
    return(
    <div className="bg-gradient-to-b from-black to-gray-600 w-auto h-auto p-4 ">
    <Header></Header>
      <div className="flex justify-center ">
        <h1 className="text-white text-4xl font-mochiy">Esto es Quienes Somos</h1>
      </div>
      <div className="grid grid-cols-2 gap-8 justify-items-center">
        <div className="text-center mt-20">
            <img src="/alberto.jpg" alt="Alberto" className="w-40 h-40 object-cover rounded-full mb-4 border-2 border-white"/>
            <h2 className="text-white text-xl font-bold">Alberto Ruiz</h2>
            <p className="text-gray-300">CEO</p>
            <a href="https://www.linkedin.com/in/alberto-ruiz-697941164/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
        </div>
        <div className="text-center mt-20">
            <img src="/ramon.jpg" alt="Ramon" className="w-40 h-40 object-cover rounded-full mb-4 border-2 border-white"/>
            <h2 className="text-white text-xl font-bold">Ramón García</h2>
            <p className="text-gray-300">COO</p>
            <a href="https://www.linkedin.com/in/ramongdelprado/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
        </div>
        <div className="text-center mt-20">
            <img src="/pablo.jpg" alt="Pablo" className="w-40 h-40 object-cover rounded-full mb-4 border-2 border-white"/>
            <h2 className="text-white text-xl font-bold">Pablo Lliso</h2>
            <p className="text-gray-300">Becario</p>
            <a href="https://www.linkedin.com/in/pablo-lliso-203847315/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
        </div>
        <div className="text-center mt-20">
            <img src="/firas.jpg" alt="Firas" className="w-40 h-40 object-cover rounded-full mb-4 border-2 border-white"/>
            <h2 className="text-white text-xl font-bold">Firas Sabia</h2>
            <p className="text-gray-300">Programmer</p>
            <a href="https://www.linkedin.com/in/firas-sabia/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
        </div>
        <div className="text-center mt-20">
            <img src="/ricardo2.jpg" alt="Ricardo" className="w-40 h-40 object-cover rounded-full mb-4 border-2 border-white"/>
            <h2 className="text-white text-xl font-bold">Ricardo Montserrat</h2>
            <p className="text-gray-300">Programmer</p>
            <a href="https://www.linkedin.com/in/ricardo-montserrat-solorzano/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
        </div>
      </div>
    <Footer></Footer>
    </div>  
    )
}
export default QuienesSomos