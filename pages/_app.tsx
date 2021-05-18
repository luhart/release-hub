import React from 'react'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../styles/global.css'

// We don't want to render this server-side.
// window.localStorage is only available client-side.
const RepoContextProviderNoSSR = dynamic(
  () => import('../utils/repo-context'),
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RepoContextProviderNoSSR>
      <Component {...pageProps} />
    </RepoContextProviderNoSSR>
  )
}

export default MyApp