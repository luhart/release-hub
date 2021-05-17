import { useState } from 'react'
import { Repo } from '../interfaces'
import RepoSlideOver from './RepoSlideOver'


type Props = {
  repos: Repo[]
}

const RepoListHeader = () => {

  const [refreshing, setRefreshing] = useState(false)
  const handleOnClick = () => {
    setRefreshing(true)
  }
  return (
    <div className="flex justify-between items-center ">
      <div>
        <p className="text-xl text-gray-900 font-semibold pb-1">Tracked repos</p>
        <p className="text-sm text-gray-500 pt-0.5">
          Check for new releases by clicking the <span className="inline-block">octocats &#8594;</span>
        </p>
        <p className="text-sm text-gray-500  pt-0.5">Unread releases are marked with a {" "}
          <span className="border-2 border-green-400 rounded-md inline-block">green border</span>
        </p>
        
      </div>
        {/* TODO: 
              - click the octocats to check for new releases 
              - onHover show overlay a refresh icon
              - onClick do a tailwind animation
        */}
        {refreshing ? (
          <img 
            className="border-2 bg-white shadow inline-block h-24 w-24 rounded-full animate-pulse" 
            src="/repocats.png"
            alt=""
          />
        ) : (
          <a onClick={() => handleOnClick()}>
            <img 
              className="border-2 bg-white shadow h-24 w-24 rounded-full hover:border-blue-200 hover:bg-gray-100" 
              src="/repocats.png"
              alt=""
            />
          </a>
        )}
    </div>
  )
}

function RepoList ({ repos }: Props) {
  const [open, setOpen] = useState(false)
  const [activeRepo, setActiveRepo] = useState<Repo>()

  return (
    <div className="mt-8 p-2">
      <RepoListHeader/>
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
    </div>
  ) 
}

export default RepoList
