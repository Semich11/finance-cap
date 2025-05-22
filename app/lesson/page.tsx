import { getTopics, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LessonPage = async () => {
    const topicData =  getTopics();
    const userProgressData =  getUserProgress();

    const [
    topic,
    userProgress
    ] = await Promise.all([
        topicData,
        userProgressData,
    ])

if (!topic || !userProgress){
    redirect("/learn");
}

    return(  
        <div>
        </div>
    )
}

export default LessonPage;
