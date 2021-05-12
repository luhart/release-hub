import { Repo } from '../interfaces'

type Props = {
  repo: Repo,
}

const RepoItem = ({ repo }: Props) => (
  <li key={repo.tagName} className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
    {repo.repoName} - {repo.tagName}
    ... other details available onClick 
  </li>
)

export default RepoItem
