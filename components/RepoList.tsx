import * as React from 'react'
import RepoItem from './RepoListItem'
import { Repo } from '../interfaces'

type Props = {
  repos: Repo[]
}

const RepoList = ({ repos }: Props) => (
  <ul className="mt-8 space-y-3">
    {repos.map((repo) => (
      <li key={repo.url}>
        <RepoItem repo={repo} />
      </li>
    ))}
  </ul>
)

export default RepoList
