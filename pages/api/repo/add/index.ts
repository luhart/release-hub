import { NextApiRequest, NextApiResponse } from 'next'
import fetchRepoData from '../../../../utils/fetch-repo'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { owner, repo } = req.body
  const repoData = await fetchRepoData({ owner, repo })
  const ret = await JSON.stringify(repoData)
  res.status(200).json(ret)
}

export default handler
