"use client";

import Link from "next/link";
import { Crown, Star } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
    id: number,
    index: number,
    totalCount: number,
};

export const LessonButton = ({
    id,
    index,
    totalCount,
}:Props) => {
    const current = true;
    const cycleLength = 8;
    const cycleIndex = index % cycleLength;

    let indentationLevel;

    if (cycleIndex <= 2){
        indentationLevel = cycleIndex;
    } else if (cycleIndex <= 4){
        indentationLevel = 4 - cycleIndex;
    } else if (cycleIndex <= 6){
        indentationLevel = 4 - cycleIndex;
    }else {
        indentationLevel = cycleIndex - 8;
    }

    const rightPosition = indentationLevel * 40;

    const isFirst = index === 0;
    const isLast = index === totalCount;
    const Icon = isLast? Crown : Star;
    const href = `/lesson/${id}`;

    return(
        <Link 
            href={href} 
         >
            <div 
                className="relative"
                style={{
                    right: `${rightPosition}px`,
                    marginTop: isFirst && true?  24 : 60,
                }}
            >
                {current ? (
                    <div className="h-[102px] w-[102px] relative flex items-center justify-center">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-3 py-2.5 border-2 font-bold uppercase text-green-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
                        Start
                        <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2"/>
                    </div>
                
                    <CircularProgressbarWithChildren
                        
                        value={0}
                        styles={{
                            path: { stroke: "#4ade80" },
                            trail: { stroke: "#e5e7eb" }
                        }}
                    >
                        <Button 
                            size="rounded"
                            variant={"secondary"}
                            className="h-[70px] w-[70px] border-b-8"
                        >
                            <Icon
                                className={cn(
                                    "h-10 w-10",
                                    true ? "fill-neutral-400 text-neutral-400 stroke-neutral-400": "fill-primary-foreground text-primary-foreground",
                                    false && "fill-none stroke[4]"
                                )}
                            />
                        </Button>
                    </CircularProgressbarWithChildren>
                </div>
                
                ) : (
                    <Button 
                        size="rounded"
                        variant={"locked"}
                        className="h-[70px] w-[70px] border-b-8"
                    >
                        <Icon
                            className={cn(
                                "h-10 w-10",
                                false ? "fill-neutral-400 text-neutral-400 stroke-neutral-400": "fill-primary-foreground text-primary-foreground",
                                false && "fill-none stroke[4]"
                            )}
                        />
                    </Button>
                )}
            </div>
        </Link>
    )
}

