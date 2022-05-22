import { Link } from 'react-router-dom'
import { useParamsSearch } from '../hooks/use-params-search'

export const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { setTypeOfSearch } = useParamsSearch()

  const handleOutsideClick = (type) => {
    setTypeOfSearch(type)
    setShowSidebar(false)
  }

  return (
    <nav className={`top-0 left-0 w-[65vw] md:w-[30vw] bg-slate-100 dark:bg-zinc-900 pt-20 px-8 text-black fixed h-full ease-in-out duration-300 z-40 rounded-tr-3xl rounded-br-3xl ${
      showSidebar ? 'translate-x-0 ' : '-translate-x-full'
    }`}
    >
      <ul className='space-y-8'>
        <li>
          <Link
            className='block text-2xl text-center text-black bg-neutral-200 font-bold p-2 rounded-tr-3xl rounded-br-xl rounded-tl-3xl rounded-bl-xl dark:bg-neutral-800 dark:text-slate-200' onClick={() => handleOutsideClick('realtime')} to='/'
          >
            Realtime
          </Link>
        </li>
        <li>
          <Link
            className='block text-2xl text-center text-black bg-neutral-200 font-bold p-2 rounded-tr-3xl rounded-br-xl rounded-tl-3xl rounded-bl-xl dark:bg-neutral-800 dark:text-slate-200' onClick={() => handleOutsideClick('forecast')} to='/'
          >
            Forecast
          </Link>
        </li>
        <li>
          <Link
            className='block text-2xl text-center text-black bg-neutral-200 font-bold p-2 rounded-tr-3xl rounded-br-xl rounded-tl-3xl rounded-bl-xl dark:bg-neutral-800 dark:text-slate-200' onClick={() => handleOutsideClick('history')} to='/'
          >
            History
          </Link>
        </li>
      </ul>
    </nav>
  )
}
