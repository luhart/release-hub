import { Fragment, Dispatch, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import { Repo } from '../interfaces'

type Props = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  repo?: Repo,
} 


const Body = (repo: Repo) => (
  <div className="absolute inset-0 px-4 sm:px-6">
    <div className="flex flex-row justify-between">
      <div className="text-md">
        <span className="mr-4 text-sm font-bold text-gray-500">release</span>
        <span>{repo.tagName}</span>
      </div>
      <div>
        <span className="mr-4 text-sm font-bold text-gray-500">release date</span>
        <span>
          { moment(repo.releaseDate).format('YYYY-MM-DD') }
        </span>
      </div>
    </div>
    <div>
      <div className="mt-4 mb-2 font-bold text-gray-800">Description</div>
      {repo.body}<hr/>
      <ReactMarkdown className="prose">{repo.body}</ReactMarkdown>
    </div>
  </div>
)


function RepoSlideOver ({open, setOpen, repo}: Props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" static className="fixed inset-0 overflow-hidden" open={open} onClose={setOpen}>
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
                          {/* There's no good way to make a border gradient in tailwind :( */}
                          <div className="inline-block">
                            <div className="bg-gradient-to-r from-blue-200 to-green-200 h-2"/>
                            <div className="bg-blue-200 h-16 w-2 mr-2 inline-block"/>
                            <div className="inline-block align-top ">
                              <span className="text-gray-500 font-medium">{repo?.owner}</span>
                              <img className="relative inline-block w-16 h-16 z-10" src="/surftocat.png"/>
                              <span className="font-bold">{repo?.repoName}</span>
                            </div>
                            <div className="bg-green-200 h-16 w-2 ml-2 inline-block"/>
                            <div className="relative bg-gradient-to-r from-blue-200 to-green-200 h-2 -mt-2 z-10"/>
                          </div>
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    { repo && Body(repo) }
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