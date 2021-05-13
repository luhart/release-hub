// Referenced for useContext + TS: https://kentcdodds.com/blog/how-to-use-react-context-effectively

import { createContext, useReducer, useEffect, useContext } from 'react'
import { Repo } from '../interfaces'

type Action = { type: string, repo: Repo }
type Dispatch = ( action: Action ) => void // | Repo[]    ???
type RepoState = Repo[]
type RepoProviderProps = {children: React.ReactNode}

const RepoContext = createContext<
  {state: RepoState; dispatch: Dispatch} | undefined
>(undefined)

function repoReducer(state: RepoState, action: Action) {
  switch (action.type) {
    case "add": {
      return [ ...state, action.repo ]
    }
    case "delete": {
      return state.filter(repo => repo.owner + repo.repoName !== action.repo.owner + action.repo.repoName)
    }
    default: {
      throw new Error(`Undefined action type: ${action.type}`)
    }
  }
}

export default function RepoContextProvider ({children}: RepoProviderProps) {
  const [ state, dispatch ] = useReducer(repoReducer, [], () => {
    const localRepoData = localStorage.getItem("repos")
    return localRepoData ? JSON.parse(localRepoData) : []
  })

  useEffect(() => {
      localStorage.setItem("repos", JSON.stringify(state))
  }, [state])

  const value = {state, dispatch}
  return (
    <RepoContext.Provider value={value}>
      {children}
    </RepoContext.Provider>
  )
}

function useRepos() {
  const context = useContext(RepoContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a RepoContextProvider')
  }
  return context
}

export { RepoContextProvider, useRepos }
