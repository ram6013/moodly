import { ISession, IUser } from "@/@types/types";
import { getUser } from "@/app/[lng]/dashboard/actions";
import { auth } from "@/auth";

export const useUser = async (): Promise<IUser | null> => {
    const session = (await auth()) as ISession;
    if (!session || !session.user || !session.user?.id) {
        return null;
    }
    const userData = await getUser(session.user?.id);
    if (!userData && session.user) return session.user;
    return userData;
};
