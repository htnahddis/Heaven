// lib/auth.ts
import { betterAuth } from "better-auth";
import dbConnect from "@/lib/db";
import User, { IUser } from "@/models/User";
import { google } from "better-auth/social-providers";

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  emailAndPassword: {
    enabled: true,
  },

  jwt: {
    secret: process.env.JWT_SECRET!,
  },

  adapter: {
    async getUser(id: string) {
      await dbConnect();
      const user = await User.findById(id);
      if (!user) return null;

      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        image: user.image || "",
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    },

    async getUserByEmail(email: string) {
      await dbConnect();
      const user = await User.findOne({ email });
      if (!user) return null;

      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        image: user.image || "",
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    },

    async createUser(data: { name: string; email: string; password?: string; image?: string }) {
      await dbConnect();

      const newUser = await User.create({
        name: data.name,
        email: data.email,
        password: data.password ?? undefined, 
        image: data.image ?? "",
      });

      return {
        id: newUser._id.toString(),
        name: newUser.name,
        email: newUser.email,
        image: newUser.image,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      };
    },

    async updateUser(id: string, updates: Partial<IUser>) {
      await dbConnect();
      const updated = await User.findByIdAndUpdate(id, updates, {
        new: true,
      });

      if (!updated) return null;

      return {
        id: updated._id.toString(),
        name: updated.name,
        email: updated.email,
        image: updated.image,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt,
      };
    },

    async deleteUser(id: string) {
      await dbConnect();
      await User.findByIdAndDelete(id);
    },
  },
});
