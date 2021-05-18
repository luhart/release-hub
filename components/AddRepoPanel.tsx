import { useForm } from 'react-hook-form'
import { useRepos } from '../utils/repo-context'

type FormValues = {
  newRepoURL: string
}

export default function AddRepoPanel(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const { dispatch } = useRepos()

  const onSubmit = async (data: FormValues): Promise<void> => {
    const parsedData = data.newRepoURL.split('/').filter((item) => item)
    const [owner, repo] = parsedData.splice(-2)
    const resp = await fetch('/api/repo/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        owner: owner,
        repo: repo,
      }),
    })
    const repoData = await resp.json()
    dispatch({ type: 'add_or_update', repo: repoData })
  }

  return (
    <div className="bg-white mt-4 shadow-lg rounded-md px-4 sm:pb-4 ">
      <div className="py-4">
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="text-xl leading-6 font-bold text-gray-900">Add a repository</h3>
            <div className="mt-2 text-sm text-gray-500">
              <p>Submit a GitHub repository URL to track.</p>
              <p className="pt-0.5">
                Or add by owner/repo: <span className="text-gray-600 font-bold">vercel/swr</span>
              </p>
            </div>
          </div>
          <div className="">
            <img src="/setuptocat.jpg" className="w-24 h-24 -mb-2 mr-1 relative z-0" />
          </div>
        </div>
        <form className="mt-1 sm:flex sm:items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full sm:max-w-xs relative z-10">
            <label htmlFor="newRepoURL" className="sr-only">
              New repo URL
            </label>
            {!errors.newRepoURL ? (
              <input
                type="text"
                id="newRepoURL"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="ex. https://github.com/vercel/swr"
                {...register('newRepoURL', { required: true })}
              />
            ) : (
              <input
                type="text"
                id="newRepoURL"
                className="shadow-sm border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm rounded-md"
                placeholder="ex. https://github.com/vercel/swr"
                {...register('newRepoURL', { required: true })}
              />
            )}
          </div>
          <button
            type="submit"
            className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}
