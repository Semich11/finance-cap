import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);



const db = drizzle(sql, { schema });

const main = async () => {
    try{
        console.log("Seeding databse");
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        
        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Investment",
                imageSrc: "/target.svg"
            },
            {
                id: 2,
                title: "Mortgage",
                imageSrc: "/main_medal.svg"
            },
            {
                id: 3,
                title: "Loan",
                imageSrc: "/target.svg"
            },
            {
                id: 4,
                title: "Dividen",
                imageSrc: "/target.svg"
            },
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of Investing",
                order: 1,
            },
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "What is Investing and Why It Matters",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: "Which of the following best describes investing"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                correct: false,
                text: "Keeping money in a savings account"
            },
            {
                id: 2,
                challengeId: 1,
                correct: false,
                text: "Spending money on daily expenses"
            },
            {
                id: 3,
                challengeId: 1,
                correct: true,
                text: " Putting money into assets with the goal of generating income or profit"
            },
            {
                id: 4,
                challengeId: 1,
                correct: false,
                text: "Storing money at home for emergencie"
            },
        ])

        console.log("Seeding finish");
    } catch(error){
        console.error(error);
        throw new Error("Failed to see the datababe")
    }
}

main();