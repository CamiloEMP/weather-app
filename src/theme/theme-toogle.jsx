import { useContext } from 'react'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import { ThemeContext } from './theme-context'

export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='flex items-center border-2 border-slate-700 dark:border-yellow-500 gap-2 rounded-full p-1 cursor-pointer text-2xl'>
      {theme === 'dark' ? <RiSunFill className='text-yellow-500 opacity-40 dark:opacity-100' /> : <RiMoonFill className='text-slate-700' />}

    </button>
  )
}
