import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'ReleaseHub - A GitHub Release Tracker' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico"/>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="flex flex-col sm:flex-row text-left justify-between bg-white shadow">
        <div className="px-4 py-4">
          <Link href="/">
            <a>
              <img
                className="w-12 h-12 inline mr-2"
                src="/logo.png"
              />
              <span className="font-extrabold text-2xl align-middle">
                ReleaseHub
              </span>
            </a>
          </Link>
        </div>
        <div className="font-semibold text-gray-600 inline align-middle py-4 px-4 my-4">
          ~&nbsp;track GitHub repo releases&nbsp;~
        </div> 
        <button className="font-bold mx-8 my-4 py-2 px-4 bg-red-400 border-black border-4 rounded-lg hover:bg-red-300">
          Source
        </button>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
