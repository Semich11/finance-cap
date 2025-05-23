"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"; 
import { Button } from "@/components/ui/button";
import { useExistModal } from "@/store/use-exit-modal";

export const ExitModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = useExistModal();

    useEffect(() => setIsClient(true), [])

    if (!isClient) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent>
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                            src="/sad_mascot.svg"
                            alt="Mascot"
                            width={80}
                            height={80}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Wait, don&apos;t go!
                    </DialogTitle>
                    <DialogDescription>
                        You are about to leave the lesson. Are you sure?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="w-full flex flex-col gap-y-4">
                        <Button 
                            variant="primary" 
                            className="w-full" 
                            size="lg" 
                            onClick={close}>
                            Keep learning
                        </Button>
                        <Button  
                            variant="dangerOutline" 
                            className="w-full" 
                            size="lg" 
                            onClick={() => {
                                close();
                                router.push("/learn")
                            }}>
                            End session 
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}