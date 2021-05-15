import { useState } from 'react'
import { Repo } from '../interfaces'
import RepoSlideOver from './RepoSlideOver'


type Props = {
  repos: Repo[]
}

const RepoListHeader = () => (
  <div className="flex justify-between items-center mt-8 ">
    <div>
      <p className="text-xl text-gray-900 font-semibold pb-1">Your tracked repos</p>
      <p className="text-sm text-gray-500">Click an item to toggle more details!</p>
      <p className="text-sm text-gray-500 pt-1">Unread releases have a {" "}
        <span className="border-2 border-green-400 rounded-md p-1">green border</span>
      </p>
    </div>
    <div className="">
      <img 
        className="border-2 bg-white shadow inline-block h-24 w-24 rounded-full" 
        src="/repocats.png"
        alt=""
      />
    </div>
  </div>
)

function RepoList ({ repos }: Props) {
  const [open, setOpen] = useState(false)
  const [activeRepo, setActiveRepo] = useState<Repo>()

  return (
    <>
      <RepoListHeader />
      <ul className="space-y-3 mt-4">
        {repos.map((repo) => (
          <li
            key={repo.tagName}
            className="bg-white shadow overflow-hidden rounded-md px-6 py-4 cursor-pointer border-transparent border-4"
            onClick={() => {
              setActiveRepo(repo)
              setOpen(true)
            }}
          >
            <div className="flex flex-row justify-between">
              <div>
                <span className="font-medium text-gray-500">{repo.owner}</span> / {" "}
                <span className="font-bold">{repo.repoName}</span>
              </div>
              <div>
                <span className="text-xs uppercase font-semibold text-gray-400 mr-2">release </span>
                <span className="font-medium p-1 rounded-md bg-blue-100">{repo.tagName}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <RepoSlideOver
        open={open} 
        setOpen={setOpen}
        repo={activeRepo}
      />
    </>
  ) 
}

export default RepoList
