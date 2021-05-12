import React from 'react'
import { AppProps } from 'next/app'
import { RepoContextProvider } from '../utils/repo-context'

import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RepoContextProvider>
      <Component {...pageProps} />
    </RepoContextProvider>
  )
}

export default MyApp