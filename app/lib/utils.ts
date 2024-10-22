import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MenuColors } from "../../@types/types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export const getStringFromBuffer = (buffer: ArrayBuffer) =>
    Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

export const createUrl = (pathname: string, params: URLSearchParams) => {
    const paramsString = params.toString();
    const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

    return `${pathname}${queryString}`;
};

export enum ResultCode {
    InvalidCredentials = "INVALID_CREDENTIALS",
    InvalidSubmission = "INVALID_SUBMISSION",
    UserAlreadyExists = "USER_ALREADY_EXISTS",
    UnknownError = "UNKNOWN_ERROR",
    UserCreated = "USER_CREATED",
    UserLoggedIn = "USER_LOGGED_IN",
}

export const PLACEHOLDER = "https://v0.dev/placeholder.svg";
export const getLanguageName = (
    lng: "en" | "he" | "ar" | "ru" | "ge" | "es"
) => {
    switch (lng) {
        case "en":
            return "English";
        case "ar":
            return "العربية";
        case "he":
            return "עברית";
        case "ru":
            return "русский";
        case "ge":
            return "ქართული";
        case "es":
            return "Español";
    }
};
export const DefaultColors: MenuColors = {
    primary: "#171717",
    secondary: "#262626",
    text: "#ffffff",
};

export function sendMessageToTelegram(text: string, userId: string) {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/send", {
        method: "POST",
        body: JSON.stringify({ message: text, userId }),
        headers: {
            Authorization: process.env.FRONEND_SIGN,
            "Content-Type": "application/json",
        },
    });
}
export function darkenColor(color: string, percent: number): string {
    // Helper function to convert hex to RGB
    function hexToRgb(hex: string) {
        // Remove the hash at the start if it's there
        hex = hex.replace(/^#/, "");

        // Parse the hex string into RGB values
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        return { r, g, b };
    }

    // Helper function to convert RGB to hex
    function rgbToHex(r: number, g: number, b: number): string {
        return (
            "#" +
            ((1 << 24) | (r << 16) | (g << 8) | b)
                .toString(16)
                .slice(1)
                .toUpperCase()
        );
    }

    // Convert hex color to RGB
    let { r, g, b } = hexToRgb(color);

    // Calculate the darkened color values
    r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent / 100))));
    g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent / 100))));
    b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent / 100))));

    // Convert the darkened RGB back to hex
    return rgbToHex(r, g, b);
}

export const getMessageFromCode = (resultCode: string) => {
    switch (resultCode) {
        case ResultCode.InvalidCredentials:
            return "Invalid credentials!";
        case ResultCode.InvalidSubmission:
            return "Invalid submission, please try again!";
        case ResultCode.UserAlreadyExists:
            return "User already exists, please log in!";
        case ResultCode.UserCreated:
            return "User created, welcome!";
        case ResultCode.UnknownError:
            return "Something went wrong, please try again!";
        case ResultCode.UserLoggedIn:
            return "Logged in!";
    }
};
