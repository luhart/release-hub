// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Repo = {
  unread?: boolean,
  owner: string,
  repoName: string,
  url: string,
  body: string,
  tagName: string,
  releaseDate: string,
}

export type GitHubURL = {
  owner: string,
  repo: string,
}