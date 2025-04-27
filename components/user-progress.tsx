import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { InfinityIcon } from "lucide-react";

type Props = {
    activeCourse: {imageSrc: string, title: string}, //Replace with DB types
    hearts: number,
    points: number,
    hasActiveSubscription: boolean,
}

export const UserProgress = ({
    activeCourse,
    hearts,
    points,
    hasActiveSubscription
}: Props) => {
    return(
        <div>
            <Link href="/">
                <Button variant="ghost">
                    <Image 
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-mb border"
                        width={32}
                        height={32}
                    />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image 
                        src="/loan.png"
                        alt="Points"
                        className="mr-2"
                        width={28}
                        height={28}
                    />
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image 
                        src="/quest.png"
                        alt="Hearts"
                        className="mr-2"
                        width={22}
                        height={22}
                    />
                    {hasActiveSubscription
                        ? <InfinityIcon className="h-4 w-4 stroke-3"/>
                        : hearts
                    }
                </Button>  
            </Link>
        </div>
    );
};