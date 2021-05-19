// Referenced for useContext + TS: https://kentcdodds.com/blog/how-to-use-react-context-effectively

import { createContext, useReducer, useEffect, useContext } from 'react'
import { Repo } from '../interfaces'

type Action = { type: string; repo: Repo }
type Dispatch = (action: Action) => void
type RepoState = Repo[]
type RepoProviderProps = { children: React.ReactNode }

const RepoContext = createContext<{ state: RepoState; dispatch: Dispatch } | undefined>(undefined)

function repoReducer(state: RepoState, action: Action): RepoState {
  switch (action.type) {
    case 'add_or_update': {
      const matchedRepo = state.find(
        (repo) => repo.owner === action.repo.owner && repo.repoName === action.repo.repoName
      )
      if (matchedRepo) {
        if (matchedRepo.tagName === action.repo.tagName) {
          return [...state]
        } else {
          const matchedRepoIndex = state.findIndex(
            (repo) => repo.owner === action.repo.owner && repo.repoName === action.repo.repoName
          )
          action.repo.unread = true
          const newState = state
          newState[matchedRepoIndex] = action.repo
          return [...newState]
        }
      } else {
        action.repo.unread = true
        return [action.repo, ...state]
      }
    }
    case 'delete': {
      // TODO: filter for and remove action.repo from localStorage
      return state.filter(
        (repo) => repo.owner + repo.repoName !== action.repo.owner + action.repo.repoName
      )
    }
    case 'mark_read': {
      action.repo.unread = false
      const newState = state.map(
        (repo) =>
          (repo.owner + repo.repoName === action.repo.owner + action.repo.repoName &&
            action.repo) ||
          repo
      )
      return [...newState]
    }
    default: {
      throw new Error(`Undefined action type: ${action.type}`)
    }
  }
}

export default function RepoContextProvider({ children }: RepoProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(repoReducer, [], () => {
    const localRepoData = localStorage.getItem('repos')
    return localRepoData ? JSON.parse(localRepoData) : []
  })

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(state))
  }, [state])

  const value = { state, dispatch }
  return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>
}

function useRepos(): { state: RepoState; dispatch: Dispatch } {
  const context = useContext(RepoContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a RepoContextProvider')
  }
  return context
}

export { RepoContextProvider, useRepos }
