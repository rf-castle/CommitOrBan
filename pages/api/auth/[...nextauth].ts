import NextAuth, {NextAuthOptions} from 'next-auth'
import Twitter from 'next-auth/providers/twitter';
import {TWITTER_CLIENT_ID, TWITTER_CLIENT_SECRET} from "../../../constant";

const authOptions: NextAuthOptions = {
  // Todo: Redirect URIを設定する
  // Todo: redirectしたら、目標一覧ページに飛ばす
  providers: [
    Twitter({
      clientId: TWITTER_CLIENT_ID,
      clientSecret: TWITTER_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      session.token = token.accessToken
      session.token_secret = token.accessTokenSecret
      return session // The return type will match the one returned in `useSession()`
    },
    redirect({url, baseUrl}){
      return '/list'
    },
    jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account != null) {
        token.accessToken = account.oauth_token
        token.accessTokenSecret = account.oauth_token_secret
      }
      return token
    }
  },
}




export default NextAuth(authOptions)
