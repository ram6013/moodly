"use client";
import { IUser } from "@/@types/types";
import { useState } from "react";
import toast from "react-hot-toast";
import { sendEmail } from "../[lng]/contact/actions";
import { useTranslation } from "../i18n/client";

function ContactPage({ lng, user }: { lng: string; user: IUser }) {
    const { t } = useTranslation(lng);
    const [msg, setMsg] = useState("");
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <h1 className="text-white text-7xl mt-16 font-mochiy">
                {t("contact")}
            </h1>

            <div className="flex flex-col w-[50%] justify-center h-auto p-6 mt-10">
                <label className="text-white mb-2">{t("comments")}</label>
                <textarea
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full h-48 p-4 border border-gray-300 rounded"
                    placeholder={t("commentsLarge")}
                ></textarea>

                <div className="flex justify-center">
                    <button
                        onClick={() => {
                            if (msg === "" || msg.length < 1) {
                                return toast.error("Please enter a message");
                            }
                            sendEmail(user.email!, user.name!, msg);
                        }}
                        className="bg-white p-5 mt-10 w-[30%] rounded-full shadow-lg font-mochiy text-black hover:bg-gray-300"
                    >
                        {t("send")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
