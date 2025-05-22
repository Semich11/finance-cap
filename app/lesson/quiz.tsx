"use client"
import { Header } from "./header";

type Props = {
  topic: {
    id: number;
    title: string;
    content: string;
    courseId: number;
    order: number;
  };
}



export const Quiz = ({topic}: Props) => {

    return(
        <div className="flex flex-col h-screen ">
            <Header
                hearts={0}
            />
            <div className="flex-1">
                <div className="lg:pt-[50px] pt-10 h-full flex items-center justify-center ">
                    <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12 ">
                        <h1 className=" text-3xl lg:text-5xl text-center lg:text-ce lg:text-start font-bold text-neutral-700">
                            {topic.title} 
                        </h1>
                        <div>
                            {topic.content}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
