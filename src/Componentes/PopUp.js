import React, { useState } from "react";

function Popup({ onClose }) {
  const [hasRead, setHasRead] = useState(false);

  const handleAccept = () => {
    setHasRead(true);
    onClose(); // Close the popup when the button is clicked
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <h1 className="text-white text-3xl font-bold mb-4">Política de Privacidad</h1>
        <p className="mb-2">Última actualización: 22/10/2024</p>
        <p>
          En MoodlyIA, valoramos y respetamos la privacidad de nuestros usuarios. Esta política de privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información cuando utiliza nuestro sitio web y nuestra tecnología de reconocimiento facial basada en inteligencia artificial (IA) para la detección de emociones faciales. Es importante que lea esta política para comprender nuestras prácticas respecto a sus datos personales.
        </p>
        <h2 className="font-bold mt-4">1. Información que Recopilamos</h2>
        <p>
          Cuando usted accede a nuestro sitio web y utiliza nuestras funciones de reconocimiento facial, recopilamos los siguientes tipos de información:
        </p>
        <ul className="list-disc pl-6">
          <li>Imágenes faciales: Utilizamos la cámara de su dispositivo para capturar imágenes de su rostro con el fin de analizar sus emociones faciales. Las imágenes captadas se procesan a través de nuestra IA.</li>
          <li>Datos emocionales: La IA analiza sus expresiones faciales para identificar emociones como felicidad, tristeza, sorpresa, enojo, entre otras.</li>
          <li>Datos adicionales: Podemos recoger metadatos asociados con las imágenes capturadas, como la fecha y hora, así como información técnica de su dispositivo (tipo de navegador, dirección IP, etc.).</li>
        </ul>
        <h2 className="font-bold mt-4">2. Finalidad del Procesamiento</h2>
        <p>
          La información que recopilamos se utiliza para las siguientes finalidades:
        </p>
        <ul className="list-disc pl-6">
          <li>Proporcionar la funcionalidad de reconocimiento facial y análisis de emociones en tiempo real.</li>
          <li>Mejorar la precisión y el rendimiento de nuestra IA mediante el análisis de los datos recolectados de manera anónima o agregada.</li>
        </ul>
        <h2 className="font-bold mt-4">3. Uso de los Datos para la Mejora de la IA</h2>
        <p>
          Nos reservamos el derecho de utilizar las imágenes faciales y los datos emocionales capturados para mejorar la calidad, precisión y eficiencia de nuestra tecnología de IA. Estos datos se utilizarán para entrenar, ajustar y optimizar nuestros modelos de IA.
        </p>
        <h2 className="font-bold mt-4">4. Derechos Humanos y Ética en el Procesamiento de Datos</h2>
        <p>
          En MoodlyIA, garantizamos que la recopilación y el procesamiento de datos se realiza respetando los derechos fundamentales de las personas, como la privacidad y la dignidad, en conformidad con normativas internacionales, incluyendo la Recomendación de la UNESCO sobre la Ética de la Inteligencia Artificial. Nos comprometemos a asegurar que nuestra IA no perpetúe sesgos ni discrimine a grupos vulnerables.
        </p>
        <h2 className="font-bold mt-4">5. Consentimiento del Usuario</h2>
        <p>
          Antes de utilizar nuestras funciones de reconocimiento facial, se le pedirá que otorgue su consentimiento explícito para la captura y procesamiento de sus imágenes faciales y emociones. Sin su consentimiento, no se activará la cámara ni se recopilarán imágenes.
        </p>
        <p>
          Al aceptar nuestra política de privacidad y hacer uso de nuestro sitio web, usted otorga su consentimiento para que recopilemos y procesemos sus datos de acuerdo con las finalidades descritas, incluido el uso de los datos para la mejora de nuestra IA.
        </p>
        <h2 className="font-bold mt-4">6. Transparencia, Responsabilidad y Supervisión Humana</h2>
        <p>
          Nuestra IA está diseñada con principios de transparencia y responsabilidad. Informamos a los usuarios sobre cómo se toman las decisiones basadas en el análisis de emociones y garantizamos la supervisión humana en todo momento para evitar errores y garantizar la rendición de cuentas.
        </p>
        <h2 className="font-bold mt-4">7. Compartición de Datos con Terceros</h2>
        <p>
          No compartimos sus datos personales con terceros, excepto en las siguientes circunstancias:
        </p>
        <ul className="list-disc pl-6">
          <li>Proveedores de servicios: Podemos compartir los datos con proveedores externos que nos ayuden a procesar y analizar la información, siempre bajo acuerdos de confidencialidad estrictos.</li>
          <li>Fines de investigación o desarrollo: Los datos anónimos pueden ser utilizados en colaboración con instituciones académicas o de investigación con el objetivo de avanzar en el campo del reconocimiento facial y la IA.</li>
        </ul>
        <h2 className="font-bold mt-4">8. Seguridad de los Datos</h2>
        <p>
          Nos comprometemos a proteger sus datos personales. Implementamos medidas de seguridad técnicas y organizativas para prevenir el acceso no autorizado, la pérdida, alteración o divulgación de los datos. Entre estas medidas se incluyen el cifrado de las imágenes y el almacenamiento seguro de los datos procesados.
        </p>
        <h2 className="font-bold mt-4">9. Retención de Datos</h2>
        <p>
          Los datos recopilados a través del reconocimiento facial se almacenarán durante el tiempo necesario para cumplir con las finalidades descritas en esta política, salvo que la ley exija un período de retención más largo. En el caso de datos utilizados para mejorar la IA, estos podrán ser almacenados indefinidamente de manera anonimizada o agregada.
        </p>
        <h2 className="font-bold mt-4">10. Derechos del Usuario</h2>
        <p>
          Usted tiene derecho a:
        </p>
        <ul className="list-disc pl-6">
          <li>Acceder a sus datos personales que hemos recopilado.</li>
          <li>Solicitar la corrección o actualización de sus datos.</li>
          <li>Solicitar la eliminación de sus datos, salvo que estemos obligados a retenerlos por razones legales.</li>
          <li>Retirar su consentimiento en cualquier momento para el uso futuro de sus datos.</li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, puede contactarnos en moodlyIA@gmail.com.
        </p>
        <h2 className="font-bold mt-4">11. Sostenibilidad y Responsabilidad Ambiental</h2>
        <p>
          Nos esforzamos por minimizar el impacto ambiental de nuestras operaciones. Implementamos prácticas responsables de gestión de datos, con el objetivo de reducir nuestra huella de carbono y optimizar el uso de recursos en el procesamiento de la IA.
        </p>
        <h2 className="font-bold mt-4">12. Cambios a esta Política de Privacidad</h2>
        <p>
          Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán reflejados en esta página y le notificaremos de cualquier modificación significativa a través de nuestro sitio web o por otros medios. Le recomendamos que revise esta política periódicamente para estar al tanto de cualquier actualización.
        </p>
        <h2 className="font-bold mt-4">13. Contacto</h2>
        <p>
          Si tiene alguna pregunta o inquietud acerca de esta política de privacidad o sobre cómo manejamos sus datos personales, por favor contáctenos a través de moodlyIA@gmail.com.
        </p>
        <div className="w-full flex justify-end">
        <button 
          onClick={handleAccept} 
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Aceptar
        </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
