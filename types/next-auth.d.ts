import NextAuth from "next-auth"

declare module "next-auth/client" {
  interface Session {
    token: string,
    token_secret: string
  }
}