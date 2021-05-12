import * as React from 'react'
import { Repo } from '../interfaces'

type Props = {
  repos: Repo[]
}

const RepoList = ({ repos }: Props) => (
  <ul className="mt-8 space-y-3">
    {repos.map((repo) => (
      <li key={repo.tagName} className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
        {repo.repoName} - {repo.tagName}
        ... other details available onClick 
      </li>
    ))}
  </ul>
)

export default RepoList
