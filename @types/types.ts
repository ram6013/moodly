import {
    CoinpaymentsCreateTransactionResponse,
    CoinpaymentsGetTxResponse,
} from "coinpayments/dist/types/response";
import { ObjectId } from "mongodb";

import { Session, User } from "next-auth";
export type IUser = {
    _id?: string;
    isVerified: boolean;
    username?: string;
    subscriptionUntil?: Date;
    joinedAt?: Date;
    isAdmin?: boolean;
    banned?: boolean;
    balance?: number;
    isProvider?: boolean;
    lastSubscriptionMessage?: Date;
    id: string;
} & User;

export type ITransaction = {
    userId: string;
    username?: string;
    name: string;
    amountDollars: number;
    hasBeenClaimed: boolean;
} & CoinpaymentsCreateTransactionResponse &
    CoinpaymentsGetTxResponse;

export type ISession = {
    user: IUser;
} & Session;

export type IMenu = {
    _id?: ObjectId;
    slug: string;
    userEmail: string;

    title?: Translation;
    description?: Translation;
    logo?: string;
    banner?: string;

    colors?: MenuColors;
    socials?: {
        phone?: SocialMediaItem;
        whatsapp?: SocialMediaItem;
        instagram?: SocialMediaItem;
        facebook?: SocialMediaItem;
        waze?: SocialMediaItem;
        telegram?: SocialMediaItem;
    };
    currency?: Currency;
    languages?: string[];

    categories?: ICategory[];
    categoryOrder?: Record<number, string | null>;
    template?: Template;
    created_at?: Date;
    subscription_end?: Date;
    lastModified?: Date;
};

export type Currency = "BTC" | "USDT" | "ETH";

export type MenuColors = {
    primary: string;
    secondary: string;
    text: string;
};

export type ICategory = {
    _id?: ObjectId;
    menuId: string;
    title: Translation;
    image?: string;
    products?: IProduct[];
    productOrder?: Record<number, string | null>;
};

export type IProduct = {
    _id?: ObjectId;
    menuId: string;
    categoryId: string;
    title: Translation;
    description?: Translation;
    price: string;
    image?: string;
    visable?: boolean;
    availability?: string | string[];
};

export type SocialMediaItem = {
    type: SocialMediaType;
    url?: string;
    display: string;
};
export enum SocialMediaType {
    Phone = "phone",
    Whatsapp = "whatsapp",
    Instagram = "instagram",
    Facebook = "facebook",
    Waze = "waze",
    Telegram = "telegram",
}

export type ImagesProps = {
    logo?: { base64: string; mimeType: string; name: string };
    banner?: { base64: string; mimeType: string; name: string };
};

export enum Template {
    Basic = "basic",
    Modern = "modern",
}

export type Translation = {
    en?: string;
    he?: string;
    ar?: string;
    ru?: string;
    ge?: string;
    es?: string;
};
