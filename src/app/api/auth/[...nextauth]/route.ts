import { db } from "@/db"
import NextAuth from "next-auth"
import {DrizzleAdapter} from "@auth/drizzle-adapter"
import GoogleProvider from "next-auth/providers/google"
import type { Adapter } from "next-auth/adapters"

const handler = NextAuth({
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }