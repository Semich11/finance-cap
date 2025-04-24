import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="flex-1">
                <Image 
                        src="/coin_36.png" 
                        alt="Investment" 
                        height={32}
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Investment
                </Button>
                <Button size="lg" variant="ghost" className="flex-1">
                <Image 
                        src="/loan.png" 
                        alt="Loan" 
                        height={32}
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Loan
                </Button>
                <Button size="lg" variant="ghost" className="flex-1">
                <Image 
                        src="/return.png" 
                        alt="Return" 
                        height={32}
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Return
                </Button>
                <Button size="lg" variant="ghost" className="flex-1">
                <Image 
                        src="/coin_36.png" 
                        alt="Investment" 
                        height={32}
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Investment
                </Button>
                <Button size="lg" variant="ghost" className="flex-1">
                <Image 
                        src="/coin_36.png" 
                        alt="Investment" 
                        height={32}
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Investment
                </Button>
            </div>
        </footer>
    )
}