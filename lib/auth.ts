import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getDatabase } from "./db";

// Top-level await gives a real Db instance
const db = await getDatabase();

export const auth = betterAuth({
  database: mongodbAdapter(db), // <-- now Db, not Promise

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    },
  },

  trustedOrigins: [
  process.env.BETTER_AUTH_URL!,
  process.env.NEXT_PUBLIC_BETTER_AUTH_URL!,
  "http://localhost:3000",
  "https://game-streaming-hpn5cx9mx-snehas-projects-385bb96f.vercel.app",
],

});
