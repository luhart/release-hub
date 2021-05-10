import { useForm } from "react-hook-form"

type FormValues = {
  newRepo: string,
};

export default function AddRepoPanel () {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
  }

  return (
    <div className="bg-white mt-4 shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Add a repository</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Input the URL for a GitHub repository you would like to track.</p>
        </div>
        <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full sm:max-w-xs">
            <label htmlFor="newRepo" className="sr-only">
              New repo
            </label>
            {!errors.newRepo ? (
             <input
              type="text"
              id="newRepo"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="ex. https://github.com/airbnb/visx"
              {...register("newRepo", { required: true })}
            />               
            ) : (
            <input
              type="text"
              id="newRepo"
              className="shadow-sm border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm rounded-md"
              placeholder="ex. https://github.com/airbnb/visx"
              {...register("newRepo", { required: true })}
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
