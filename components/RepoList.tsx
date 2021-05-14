import { useState } from 'react'
import { Repo } from '../interfaces'
import RepoSlideOver from './RepoSlideOver'


type Props = {
  repos: Repo[]
}

const RepoListHeader = () => (
  <div className="flex justify-between items-center mt-8 ">
    <div className="ml-3">
      <p className="text-xl font-semibold pb-1">Your tracked repos</p>
      <p className="text-sm text-gray-500">Click an item to toggle more details!</p>
      <p className="text-sm text-gray-500">New releases are marked with a 
        <span className="mx-1 inline-block h-2 w-2 rounded-full  ring-white bg-green-400" />
      </p>
    </div>
    <div>
      <img 
        className="inline-block h-24 w-24 rounded-full" 
        src="/repocats.png"
        alt=""
      />
    </div>
  </div>
)

function RepoList ({ repos }: Props) {
  const [open, setOpen] = useState(true)
  const [activeRepo, setActiveRepo] = useState<Repo>()

  return (
    <>
      <RepoListHeader />
      <ul className="space-y-3">
        {repos.map((repo) => (
          <li
            key={repo.tagName}
            className="bg-white shadow overflow-hidden rounded-md px-6 py-4 cursor-pointer"
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
