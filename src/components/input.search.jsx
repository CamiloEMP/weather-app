import { RiSearchLine } from 'react-icons/ri'
import { IoIosClose } from 'react-icons/io'

export const InputSearch = ({ search, setSearch }) => {
  return (
    <div className='bg-neutral-300 dark:bg-neutral-800 w-11/12 mx-auto flex items-center justify-between py-4 pr-8 pl-4 rounded-full'>
      <div className='flex items-center gap-2 w-11/12'>
        <RiSearchLine className='text-xl dark:text-gray-400' />
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='bg-transparent outline-none text-2xl pb-1 w-4/5 dark:text-slate-100' type='text' placeholder='Colombia' />
      </div>
      <IoIosClose onClick={() => setSearch('')} className='text-3xl dark:text-gray-400 cursor-pointer' />
    </div>
  )
}
