import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <nav className="w-full font-mono text-left border-b-4 bg-gradient-to-l from-green-400 bg-indigo-700 border-black shadow">
        <div className="flex flex-row m-auto justify-between max-w-7xl">
          <div className="px-2 py-2"> <Link href="/">
              <a>
                <img
                  className="w-14 h-14 inline align-top mr-2 mt-1"
                  src="/logo.svg"
                />
                <div className="inline-block">
                  <div className="text-white font-extrabold text-2xl">
                    ReleaseHub
                  </div>
                  <div className="font-regular text-gray-300 text-xs border-l-4 pl-2 border-gray-500">
                    Stay current with your <br/> favorite GitHub repos
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <a
            href="https://github.com/luhart/release-hub"
            className="my-auto mx-2 py-2 px-2 border-2 border-indigo-400 text-md font-bold rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Source
          </a>
        </div>
      </nav>
    </>
  )
}