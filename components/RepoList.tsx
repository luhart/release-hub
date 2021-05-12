import * as React from 'react'
import { Repo } from '../interfaces'

type Props = {
  repos: Repo[]
}

const RepoListHeader = () => (
  <div className="flex justify-between items-center mt-8 ">
    <div className="ml-3">
      <p className="text-xl font-semibold">Your tracked repos</p>
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

const RepoList = ({ repos }: Props) => (
  <>
    <RepoListHeader />
    <ul className="space-y-3">
      {repos.map((repo) => (
        <li key={repo.tagName} className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
          {repo.repoName} - {repo.tagName}
          ... other details available onClick 
        </li>
      ))}
    </ul>
  </>
)

export default RepoList
