import React from "react";
import Header from "../Componentes/Header";
import { useLanguage } from "../LanguageContext";
import Footer from "../Componentes/Footer";

const spanishText = `
    <h1 class="text-white text-3xl font-bold">Política de Privacidad</h1>
    Última actualización: 22/10/2024

    En MoodlyIA, valoramos y respetamos la privacidad de nuestros usuarios. Esta política de privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información cuando utiliza nuestro sitio web y nuestra tecnología de reconocimiento facial basada en inteligencia artificial (IA) para la detección de emociones faciales. Es importante que lea esta política para comprender nuestras prácticas respecto a sus datos personales.

    1. Información que Recopilamos
    Cuando usted accede a nuestro sitio web y utiliza nuestras funciones de reconocimiento facial, recopilamos los siguientes tipos de información:

    Imágenes faciales: Utilizamos la cámara de su dispositivo para capturar imágenes de su rostro con el fin de analizar sus emociones faciales. Las imágenes captadas se procesan a través de nuestra IA.
    Datos emocionales: La IA analiza sus expresiones faciales para identificar emociones como felicidad, tristeza, sorpresa, enojo, entre otras.
    Datos adicionales: Podemos recoger metadatos asociados con las imágenes capturadas, como la fecha y hora, así como información técnica de su dispositivo (tipo de navegador, dirección IP, etc.).
    2. Finalidad del Procesamiento
    La información que recopilamos se utiliza para las siguientes finalidades:

    Proporcionar la funcionalidad de reconocimiento facial y análisis de emociones en tiempo real.
    Mejorar la precisión y el rendimiento de nuestra IA mediante el análisis de los datos recolectados de manera anónima o agregada.
    3. Uso de los Datos para la Mejora de la IA
    Nos reservamos el derecho de utilizar las imágenes faciales y los datos emocionales capturados para mejorar la calidad, precisión y eficiencia de nuestra tecnología de IA. Estos datos se utilizarán para entrenar, ajustar y optimizar nuestros modelos de IA.

    Mejora del servicio: Los datos capturados pueden ser usados para perfeccionar nuestros algoritmos de reconocimiento facial y mejorar la detección de emociones.
    Desidentificación: Antes de utilizar los datos con fines de mejora, tomamos medidas razonables para desidentificar o anonimizar la información, asegurando que no sea posible rastrear o identificar a los usuarios individuales.
    4. Derechos Humanos y Ética en el Procesamiento de Datos
    En MoodlyIA, garantizamos que la recopilación y el procesamiento de datos se realiza respetando los derechos fundamentales de las personas, como la privacidad y la dignidad, en conformidad con normativas internacionales, incluyendo la Recomendación de la UNESCO sobre la Ética de la Inteligencia Artificial. Nos comprometemos a asegurar que nuestra IA no perpetúe sesgos ni discrimine a grupos vulnerables.

    5. Consentimiento del Usuario
    Antes de utilizar nuestras funciones de reconocimiento facial, se le pedirá que otorgue su consentimiento explícito para la captura y procesamiento de sus imágenes faciales y emociones. Sin su consentimiento, no se activará la cámara ni se recopilarán imágenes.

    Al aceptar nuestra política de privacidad y hacer uso de nuestro sitio web, usted otorga su consentimiento para que recopilemos y procesemos sus datos de acuerdo con las finalidades descritas, incluido el uso de los datos para la mejora de nuestra IA.

    6. Transparencia, Responsabilidad y Supervisión Humana
    Nuestra IA está diseñada con principios de transparencia y responsabilidad. Informamos a los usuarios sobre cómo se toman las decisiones basadas en el análisis de emociones y garantizamos la supervisión humana en todo momento para evitar errores y garantizar la rendición de cuentas.

    7. Compartición de Datos con Terceros
    No compartimos sus datos personales con terceros, excepto en las siguientes circunstancias:

    Proveedores de servicios: Podemos compartir los datos con proveedores externos que nos ayuden a procesar y analizar la información, siempre bajo acuerdos de confidencialidad estrictos.
    Fines de investigación o desarrollo: Los datos anónimos pueden ser utilizados en colaboración con instituciones académicas o de investigación con el objetivo de avanzar en el campo del reconocimiento facial y la IA.
    8. Seguridad de los Datos
    Nos comprometemos a proteger sus datos personales. Implementamos medidas de seguridad técnicas y organizativas para prevenir el acceso no autorizado, la pérdida, alteración o divulgación de los datos. Entre estas medidas se incluyen el cifrado de las imágenes y el almacenamiento seguro de los datos procesados.

    9. Retención de Datos
    Los datos recopilados a través del reconocimiento facial se almacenarán durante el tiempo necesario para cumplir con las finalidades descritas en esta política, salvo que la ley exija un período de retención más largo. En el caso de datos utilizados para mejorar la IA, estos podrán ser almacenados indefinidamente de manera anonimizada o agregada.

    10. Derechos del Usuario
    Usted tiene derecho a:

    Acceder a sus datos personales que hemos recopilado.
    Solicitar la corrección o actualización de sus datos.
    Solicitar la eliminación de sus datos, salvo que estemos obligados a retenerlos por razones legales.
    Retirar su consentimiento en cualquier momento para el uso futuro de sus datos.
    Para ejercer cualquiera de estos derechos, puede contactarnos en moodlyIA@gmail.com.

    11. Sostenibilidad y Responsabilidad Ambiental
    Nos esforzamos por minimizar el impacto ambiental de nuestras operaciones. Implementamos prácticas responsables de gestión de datos, con el objetivo de reducir nuestra huella de carbono y optimizar el uso de recursos en el procesamiento de la IA.

    12. Cambios a esta Política de Privacidad
    Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán reflejados en esta página y le notificaremos de cualquier modificación significativa a través de nuestro sitio web o por otros medios. Le recomendamos que revise esta política periódicamente para estar al tanto de cualquier actualización.

    13. Contacto
    Si tiene alguna pregunta o inquietud acerca de esta política de privacidad o sobre cómo manejamos sus datos personales, por favor contáctenos a través de moodlyIA@gmail.com."
    `;

const englishText = `
    <h1 class="text-white text-3xl font-bold">Privacy Policy</h1>
    Last Updated: 22/10/2024

    At MoodlyIA, we value and respect our users' privacy. This privacy policy explains how we collect, use, share, and protect your information when you use our website and our facial recognition technology based on artificial intelligence (AI) for facial emotion detection. It is important that you read this policy to understand our practices regarding your personal data.

    1. Information We Collect
    When you access our website and use our facial recognition features, we collect the following types of information:

    Facial images: We use your device's camera to capture images of your face in order to analyze your facial emotions. The captured images are processed through our AI system.
    Emotional data: The AI analyzes your facial expressions to identify emotions such as happiness, sadness, surprise, anger, among others.
    Additional data: We may collect metadata associated with the captured images, such as date and time, as well as technical information about your device (browser type, IP address, etc.).
    2. Purpose of Processing
    The information we collect is used for the following purposes:

    To provide the functionality of real-time facial recognition and emotion analysis.
    To improve the accuracy and performance of our AI through the analysis of collected data in an anonymous or aggregated manner.
    3. Use of Data for AI Improvement
    We reserve the right to use the facial images and emotional data captured through our platform to enhance the quality, accuracy, and efficiency of our AI technology. This data will be used to train, adjust, and optimize our AI models.

    Service Improvement: Captured data may be used to refine our facial recognition algorithms and improve emotion detection.
    De-identification: Before using the data for improvement purposes, we take reasonable steps to de-identify or anonymize the information, ensuring that it is not possible to trace or identify individual users from the collected data.
    4. Human Rights and Ethical Data Processing
    At MoodlyIA, we ensure that the collection and processing of data respects individuals' fundamental rights, such as privacy and dignity, in accordance with international standards, including UNESCO’s Recommendation on the Ethics of Artificial Intelligence. We are committed to ensuring that our AI does not perpetuate biases or discriminate against vulnerable groups.

    5. User Consent
    Before using our facial recognition features, you will be asked to provide your explicit consent for the capture and processing of your facial images and emotions. Without your consent, the camera will not be activated, and no images will be collected.

    By accepting our privacy policy and using our website, you provide your consent for us to collect and process your data for the purposes described, including the use of data for improving our AI.

    6. Transparency, Accountability, and Human Oversight
    Our AI is designed with transparency and accountability in mind. Users will be informed about how decisions based on emotion analysis are made, and we ensure human oversight at all times to avoid errors and ensure accountability.

    7. Data Sharing with Third Parties
    We do not share your personal data with third parties, except in the following circumstances:

    Service providers: We may share data with external providers who assist us in processing and analyzing the information, always under strict confidentiality agreements.
    Research or development purposes: Anonymous data may be used in collaboration with academic or research institutions to advance the field of facial recognition and AI.
    8. Data Security
    We are committed to protecting your personal data. We implement technical and organizational security measures to prevent unauthorized access, loss, alteration, or disclosure of data. These measures include the encryption of images and the secure storage of processed data.

    9. Data Retention
    The data collected through facial recognition will be stored for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law. In the case of data used to improve AI, this may be stored indefinitely in an anonymized or aggregated form.

    10. User Rights
    You have the right to:

    Access your personal data that we have collected.
    Request the correction or updating of your data.
    Request the deletion of your data, unless we are required to retain it for legal reasons.
    Withdraw your consent at any time for future use of your data.
    To exercise any of these rights, you can contact us at moodlyIA@gmail.com.

    11. Sustainability and Environmental Responsibility
    We strive to minimize the environmental impact of our operations. We implement responsible data management practices aimed at reducing our carbon footprint and optimizing resource usage during AI processing.

    12. Changes to This Privacy Policy
    We reserve the right to modify this privacy policy at any time. Changes will be reflected on this page, and we will notify you of any significant modifications through our website or other means. We recommend that you periodically review this policy to stay informed of any updates.

    13. Contact
    If you have any questions or concerns about this privacy policy or how we handle your personal data, please contact us at moodlyIA@gmail.com.
    `;

function PoliticaPrivacidad(){
    const { isLanguageSpanish } = useLanguage();
    return(
        <div className="bg-gradient-to-b from-black to-gray-600 h-full relative w-full p-4 gap-8 flex flex-col items-center justify-center">
            <Header></Header>
            <div className="flex justify-center max-w-[60%] max-h-[80vh] overflow-y-scroll overflow-hidden p-4"> 
                <h1
            className="text-white text-sm justify-center"
            dangerouslySetInnerHTML={{
                __html: isLanguageSpanish
                ? spanishText.replace(/\n/g, "<br />")
                : englishText.replace(/\n/g, "<br />"),
            }}
            ></h1>
            </div>

            <Footer></Footer>
        </div>
    )
}
export default PoliticaPrivacidad;