import { Octokit } from "@octokit/core"
import { GitHubURL } from "../interfaces"

const octokit = new Octokit();

export default async function fetchRepoData(url: GitHubURL) {
  const response = await octokit.request('GET /repos/{owner}/{repo}/releases', {
    owner: url.owner,
    repo: url.repo,
  })
  const data = {
    owner: url.owner,
    repoName: url.repo,
    url: response.data[0].url,
    body: response.data[0].body,
    tagName: response.data[0].tag_name,
    releaseDate: response.data[0].published_at,
  }
  return data
}
