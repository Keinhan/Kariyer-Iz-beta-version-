import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prismadb";
// import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {},

    //   async authorize(credentials) {
    //     const { email, password } = credentials;
    //     try {
    //       await connectMongoDB();
    //       const user = await User.findOne({ email });

    //       if (!user) {
    //         return null;
    //       }

    //       const passwordMatch = await bcrypt.compare(password, user.password);

    //       if (!passwordMatch) {
    //         return null;
    //       }

    //       return user;
    //     } catch (error) {
    //       console.log("Error: ", error);
    //     }
    //   },
    // }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
