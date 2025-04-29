// import "dotenv/config";
// import type { Config } from "drizzle-kit";

// export default {
//     schema: "./db/schema.ts",
//     out: "drizzle",
//     driver: "pg",
//     dbCredentials: {
//         connectionString: process.env.DATABASE_URL!
//     },
// } satisfies Config;


// // drizzle.config.ts
// import "dotenv/config";
// import type { Config } from "drizzle-kit";

// // Config setup for drizzle-kit@0.20.x or earlier
// const config: Config = {
//   schema: "./db/schema.ts",  // Path to your schema file
//   out: "drizzle",             // Where migrations will be stored
//   driver: "pg",               // Using PostgreSQL (Neon)
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,  // Your Neon URL
//   },
// };

// export default config;




import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts", 
  out: "./db/drizzle.ts", 
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },    
  dialect: 'postgresql',     
});

