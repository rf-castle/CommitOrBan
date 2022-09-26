import '../styles/globals.css'
import {Session} from 'next-auth';
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

type props = {
  session: Session
}

function MyApp({ Component, pageProps }: AppProps<props>): JSX.Element {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
