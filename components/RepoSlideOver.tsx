import { Fragment, Dispatch, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Repo } from '../interfaces'
import { useRepos } from '../utils/repo-context'

type Props = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  repo?: Repo,
}




function Body (repo: Repo, setOpen: Dispatch<SetStateAction<boolean>> ) {
  const { dispatch } = useRepos()
  const StopTracking = (repo: Repo) => {
    setOpen(false)
    dispatch({type: "delete", repo: repo})
  }
  return (
  <div className="absolute inset-0 px-4 sm:px-6 divide-dashed divide-y-4">
    <div className="flex flex-row justify-between my-4">
      <div className="text-md text-gray-800 font-bold">
        <div className="mr-4 text-sm font-semibold text-gray-500">current release</div>
        <div className="pb-4">{repo.tagName}</div>
      </div>
      <div className="text-md text-gray-800 font-bold">
        <div className="mr-4 text-sm font-semibold text-gray-500">release date</div>
        <div>
          { moment(repo.releaseDate).format('YYYY-MM-DD') }
        </div>
      </div>
      <div>
        <button
          onClick={() => StopTracking(repo)}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"        >
          Stop Tracking
        </button>
      </div>
    </div>
    <div className="py-8">
      <ReactMarkdown className="prose" remarkPlugins={[gfm]} >{repo.body}</ReactMarkdown>
    </div>
  </div>
  )
}


function RepoSlideOver ({open, setOpen, repo}: Props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" static className="fixed inset-0 overflow-hidden z-20" open={open} onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-2xl">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg text-gray-900">
                        <div className="inline-block">
                          <span className="font-bold">{repo?.repoName}</span>
                          <img className="relative inline-block w-16 h-16 z-10" src="/surftocat.png"/>
                          <span className="text-gray-500 font-medium">by {repo?.owner}</span>
                        </div>
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    { repo && Body(repo, setOpen) }
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default RepoSlideOver