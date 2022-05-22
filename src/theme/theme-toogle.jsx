import { useContext } from 'react'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import { ThemeContext } from './theme-context'

export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='h-10 w-10 flex items-center justify-center border-2 border-slate-700 dark:border-yellow-500 gap-2 rounded-full p-1 cursor-pointer'>
      {theme === 'dark' ? <RiSunFill className='text-yellow-500 opacity-40 dark:opacity-100 text-2xl' /> : <RiMoonFill className='text-slate-700 text-2xl' />}

    </button>
  )
}
