import { getTopicById, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "../quiz";


const LessonPage = async ({
  params,
}: {
  params: Promise<{ topicId: string }>
}) => {

  const { topicId } = await params
  const topicIdNumber = Number(topicId);

  if (isNaN(topicIdNumber)) {
    redirect("/learn");
  }

  const [
    topic, 
    userProgress
    ] = await Promise.all([
    getTopicById(topicIdNumber),
    getUserProgress(),
  ]);

  if (!topic || !userProgress) {
    redirect("/learn");
  }


  return (
    <div className="bg-black flex-1 text-white">
      <Quiz
        topic={topic}
      />  
    </div>
  );
};

export default LessonPage;
