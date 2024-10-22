import { ISession } from "@/@types/types";
import { auth } from "@/auth";

export default async function Contact({
    params: { lng },
}: {
    params: {
        lng: string;
    };
}) {
    const session = (await auth()) as ISession;
    return <></>;
}
