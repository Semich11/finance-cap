import { Progress } from "@/components/ui/progress"
import { useExistModal } from "@/store/use-exit-modal"
import { InfinityIcon, X } from "lucide-react"
import Image from "next/image"

type Props = {
    hearts: number,
}

export const Header = ({

    hearts,

}:Props) => {
    const { open } = useExistModal();

    return(
        <header className=" lg:pt-[50px] pt-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
            <X
                onClick={open}
                className="text-slate-500 hover:opacity-75 transition cursor-pointer"
            />
            <Progress value={15}/>
            <div className="text-rose-500 flex items-center font-bold">
                <Image
                    src="/return.png"
                    height={28}
                    width={28}
                    alt="Heart"
                    className="mr-2"
                />
                {true
                    ? <InfinityIcon className="w-6 h-6 stroke-[3]"/>
                    : hearts
                }
            </div>
        </header>
    )
}