import Layout from '../components/Layout'
import AddRepoPanel from '../components/AddRepoPanel'
import RepoList from '../components/RepoList'

const IndexPage = () => (
  <Layout>
    <AddRepoPanel />
    <RepoList />
  </Layout>
)

export default IndexPage
