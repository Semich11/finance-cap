import { cache } from "react";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import db from "@/db/drizzle";
import { courses, topics, userProgress } from "@/db/schema";

export const getUserProgress = cache(async () => {
    const { userId } = await auth();

    if (!userId){
        return null;
    }

    const data = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true, 
        }
    })

    return data;
});

export const getTopics = cache(async () => {
    const { userId } = await auth();
    const userProgress = await getUserProgress();
    if (!userId || !userProgress?.activeCourseId){
        return [];
    }
    const data = await db.query.topics.findMany({
        where: eq(topics.courseId, userProgress.activeCourseId),
    })

    return data;
})

export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany();
    return data;
})

export const getCourseById = cache(async (courseId: number) => {
    const data = await db.query.courses.findFirst({
        where: eq(courses.id, courseId),
    });

    return data;
});



export const getTopicById = cache(async (topicId: number) => {
    const data = await db.query.topics.findFirst({
        where: eq(topics.id, topicId),
    });

    return data;
});