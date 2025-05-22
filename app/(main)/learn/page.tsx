import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";

import { Header } from "./header";
import { getTopics, getUserProgress } from "@/db/queries";
import { LessonButton } from "./lesson-button";

const LearnPage = async () => {
  const topicsData = getTopics();
  const userProgressData = getUserProgress();


  const [
    topics,
    userProgress,
  ] = await Promise.all([
    topicsData,
    userProgressData,
  ]);

  if (!userProgress || !userProgress.activeCourse){
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        <div className=" flex items-center flex-col relative">
          {topics.map((topic, index) => {

            return (
                <LessonButton 
                    key={topic.id}
                    id={topic.id}  
                    index={index}
                    totalCount={topics.length - 1}
                />
            );
          })}
        </div>

      </FeedWrapper>
    </div>
  );
};

export default LearnPage;

