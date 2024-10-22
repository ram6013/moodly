import { ISession } from "@/@types/types";
import Nostros from "@/app/components/nosotros";
import { auth } from "@/auth";

export default async function About({
    params: { lng },
}: {
    params: {
        lng: string;
    };
}) {
    const isLanguageSpanish = lng === "es";
    const session = (await auth()) as ISession;
    return (
        <div className="bg-gradient-to-b from-black to-gray-600 w-auto h-screen ">
            <div className="flex justify-center p-4">
                <h1 className="text-white text-4xl font-mochiy">
                    {isLanguageSpanish
                        ? "¿Quienes somos nosotros?"
                        : "Who are we?"}
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-8 justify-items-center">
                <Nostros
                    lng={lng}
                    nombre="Alberto Ruiz"
                    oficioEsp="CEO"
                    oficioEng="CEO"
                    src="/en/heads/alberto.jpg"
                    linkedin="https://www.linkedin.com/in/alberto-ruiz-697941164/"
                />
                <Nostros
                    lng={lng}
                    nombre="Ramón García"
                    oficioEsp="COO"
                    oficioEng="COO"
                    src="/en/heads/ramon.jpg"
                    linkedin="https://www.linkedin.com/in/ramongdelprado/"
                />
                <Nostros
                    nombre="Pablo Lliso"
                    lng={lng}
                    oficioEsp="Becario"
                    oficioEng="Intern"
                    src="/en/heads/pablo.jpg"
                    linkedin="https://www.linkedin.com/in/pablo-lliso-203847315/"
                />
            </div>
            <div className="grid grid-cols-2 gap-8 justify-items-center">
                <Nostros
                    nombre="Firas Sabia"
                    oficioEsp="Programador"
                    lng={lng}
                    oficioEng="Coder"
                    src="/en/heads/firas.jpg"
                    linkedin="https://www.linkedin.com/in/firas-sabia/"
                />
                <Nostros
                    nombre="Ricardo Montserrat"
                    oficioEsp="Programador"
                    lng={lng}
                    oficioEng="Coder"
                    src="/en/heads/ricardo2.jpg"
                    linkedin="https://www.linkedin.com/in/ricardo-montserrat-solorzano/"
                />
            </div>
        </div>
    );
}
