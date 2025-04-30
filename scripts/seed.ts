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
        
        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Investment",
                imgSrc: "/target.svg"
            },
            {
                id: 2,
                title: "Mortgage",
                imgSrc: "/target.svg"
            },
            {
                id: 3,
                title: "Loan",
                imgSrc: "/target.svg"
            },
            {
                id: 4,
                title: "Dividen",
                imgSrc: "/target.svg"
            },
        ]);

        console.log("Seeding finish");
    } catch(error){
        console.error(error);
        throw new Error("Failed to see the datababe")
    }
}

main();