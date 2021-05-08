import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <nav className="w-full font-mono text-left border-b-4 bg-gradient-to-l from-green-400 bg-indigo-800 border-black shadow">
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
                  <div className="font-regular text-gray-400 text-xs border-l-4 pl-2 border-gray-400">
                    Stay current with your <br/> favorite GitHub repos
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <button className="my-4 mx-2 px-2 font-bold bg-red-400 border-black border-4 rounded-lg hover:bg-red-300 max-h-12 min-w-24">
            Source
          </button>
        </div>
      </nav>
    </>
  )
}