import React from "react";
import Header from "../Componentes/Header";
import { useLanguage } from "../LanguageContext";
import Footer from "../Componentes/Footer";

const spanishText = `
    <h1 class="text-white text-3xl font-bold">Política de Cookies</h1>
    Última actualización: 22/10/2024

    En MoodlyIA, utilizamos cookies para mejorar su experiencia en nuestro sitio web. Esta política de cookies explica qué son las cookies, cómo las usamos y cómo puede gestionarlas.

    1. ¿Qué Son las Cookies?
    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos ayudan a comprender cómo interactúa con nuestro sitio y a mejorar su funcionalidad.

    2. Finalidad de las Cookies
    Usamos cookies para los siguientes propósitos:

    Mejora de la IA: Recopilamos datos anónimos sobre las interacciones de los usuarios para ayudarnos a perfeccionar y optimizar nuestros sistemas de inteligencia artificial. Estos datos nos permiten mejorar la precisión, eficiencia y rendimiento general de nuestras tecnologías de IA, particularmente en el campo del reconocimiento de emociones faciales.
    Comunicación por Correo Electrónico: Utilizamos cookies para rastrear y gestionar las suscripciones por correo electrónico, asegurando que enviamos comunicaciones relevantes a quienes se suscriben.
    3. Tipos de Cookies que Utilizamos
    Cookies Esenciales: Estas cookies son necesarias para el funcionamiento básico de nuestro sitio web. Le permiten navegar por el sitio y utilizar sus funciones.
    Cookies de Rendimiento: Estas cookies recopilan datos sobre cómo los usuarios interactúan con nuestro sitio web, lo que nos permite mejorar su rendimiento y funcionalidad, especialmente en lo relacionado con la mejora de nuestros sistemas de IA.
    4. Cookies de Terceros
    No utilizamos cookies de terceros con fines publicitarios o de marketing. Todos los datos recopilados a través de cookies se usan exclusivamente para mejorar nuestros sistemas de IA y gestionar las comunicaciones por correo electrónico.

    5. Gestión de Cookies
    Puede controlar y gestionar las cookies a través de la configuración de su navegador. Tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad de nuestro sitio web y limitar ciertas características, incluidas las suscripciones por correo electrónico y las mejoras relacionadas con la IA.

    6. Contáctenos
    Si tiene alguna pregunta sobre esta política de cookies o sobre cómo usamos las cookies, por favor contáctenos en moodlyIA@gmail.com.
    `;

const englishText = `
    <h1 class="text-white text-3xl font-bold">Cookie Policy</h1>
    Last Updated: 22/10/2024

    At MoodlyIA, we use cookies to enhance your experience on our website. This cookie policy explains what cookies are, how we use them, and how you can manage them.

    1. What Are Cookies?
    Cookies are small text files that are stored on your device when you visit our website. They help us understand how you interact with our website and improve its functionality.

    2. Purpose of Cookies
    We use cookies for the following purposes:

    AI Improvement: We collect anonymized data about user interactions to help refine and optimize our AI systems. This data allows us to enhance the accuracy, efficiency, and overall performance of our AI technologies, particularly in the field of facial emotion recognition.
    Email Communication: We use cookies to track and manage email subscriptions, ensuring we send relevant communications to those who opt in.
    3. Types of Cookies We Use
    Essential Cookies: These cookies are necessary for the basic functioning of our website. They allow you to navigate the site and use its features.
    Performance Cookies: These cookies collect data on how users interact with our website, allowing us to improve the website’s performance and functionality, particularly in relation to the enhancement of our AI systems.
    4. Third-Party Cookies
    We do not use third-party cookies for advertising or marketing purposes. All data collected via cookies is used strictly for improving our AI systems and managing email communications.

    5. Managing Cookies
    You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website and limit certain features, including email subscription services and AI-related improvements.

    6. Contact Us
    If you have any questions about this cookie policy or how we use cookies, please contact us at moodlyIA@gmail.com.
    `;

function PoliticaCookies(){
    const { isLanguageSpanish } = useLanguage();
    return(
        <div className="bg-gradient-to-b from-black to-gray-600 h-screen w-full p-4 gap-8 flex flex-col items-center justify-center">
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
export default PoliticaCookies;