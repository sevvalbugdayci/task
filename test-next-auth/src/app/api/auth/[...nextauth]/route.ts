import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
    id: number;
    username: string;
    email: string;
    password: string; // Not: Gerçek uygulamalarda şifrenin bu şekilde saklanmaz.
}

const authOptions : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name : "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }, 
            },
            async authorize(credentials) {
                const res = await fetch("http://localhost:3001/users");
                const users = await res.json();
                const user = users.find(
                    (u: User) => u.email === credentials?.email && u.password === credentials?.password
                );

                if(user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };