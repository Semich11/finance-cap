import { auth } from "@clerk/nextjs/server";

const allowedIds = [
    "user_2wAnwRxHpCEQCwFn2xo9VSjptZJ",
]

export const isAdmin = async () => {
    const { userId } = await auth();

    if(!userId) {
        return false;
    }

    return allowedIds.indexOf(userId) !== -1
}