import { API_AUTH } from "@/lib/api/auth.api";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.username || !credentials?.password) return null;
          const user = await API_AUTH.login({
            username: credentials.username,
            password: credentials.password,
          });
          console.log(user);
          if (user) {
            return { ...user.data } as any;
          }
          return null;
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("USER", user);
        token.name = user.name;
        token.username = user.username;
        token.role = user.role;
        token.token = user.token;
        token.profilePicture = null;
      }

      return { ...token };
    },
    async session({ session, token }) {
      console.log("SESSION", token);
      //   session. = token;
      return session;
    },
  },
};

export default NextAuth(authOptions);
