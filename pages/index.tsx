import { RepoContextProvider, useRepos } from '../utils/repo-context'
import Layout from '../components/Layout'
import AddRepoPanel from '../components/AddRepoPanel'
import RepoList from '../components/RepoList'

export default function IndexPage () {
  const { state } = useRepos()

  return (
    <RepoContextProvider>
      <Layout>
        <AddRepoPanel />
        <RepoList repos={state}/>
      </Layout>
    </RepoContextProvider>
  )
}
