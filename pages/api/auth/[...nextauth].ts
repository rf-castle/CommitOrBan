import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'

export const authOptions = {
  // Configure one or more authentication providers
  // Todo: Redirect URIを設定する
  // Todo: redirectしたら、目標一覧ページに飛ばす
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: "2.0"
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
