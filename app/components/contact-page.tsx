"use client";
import { useTranslation } from "../i18n/client";

function ContactPage({ lng }: { lng: string }) {
    const { t } = useTranslation(lng);
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <h1 className="text-white text-7xl mt-16 font-mochiy">
                {t("contact")}
            </h1>

            <div className="flex flex-col w-[50%] justify-center h-auto p-6 mt-10">
                <label className="text-white mb-2">{t("comments")}</label>
                <textarea
                    className="w-full h-48 p-4 border border-gray-300 rounded"
                    placeholder={t("commentsLarge")}
                ></textarea>

                <div className="flex justify-center">
                    <button className="bg-white p-5 mt-10 w-[30%] rounded-full shadow-lg font-mochiy text-black hover:bg-gray-300">
                        {t("send")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
