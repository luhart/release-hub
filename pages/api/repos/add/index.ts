import { NextApiRequest, NextApiResponse } from "next"
import fetchRepoData from "../../../../utils/fetchRepoData"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { owner, repo } = req.body
  const repoData = await fetchRepoData({owner, repo})
  const ret = await JSON.stringify(repoData) 
  res.status(200).json(ret)
}

export default handler

