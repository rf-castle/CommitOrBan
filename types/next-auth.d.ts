import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    token: string,
    token_secret: string
  }
}