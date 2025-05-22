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
        await db.delete(schema.topics);
        
        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Investment",
                imageSrc: "/target.svg"
            },
        ]);

        await db.insert(schema.topics).values([
            {
               id: 1,
               title: "Money",
               content: "Understand how money work", 
               courseId: 1,
               order: 1,
            },
        ]);

        

        console.log("Seeding finish");
    } catch(error){
        console.error(error);
        throw new Error("Failed to seed the database")
    }
}

main();