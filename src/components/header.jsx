import { useState } from 'react'
import { Toggle } from '../theme/theme-toogle'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import { Sidebar } from './sidebar'

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <header className='flex justify-between items-center p-4'>
      <div className='z-50 flex gap-0.5 items-center'>
        {showSidebar
          ? (
            <IoCloseOutline className='w-12 text-4xl dark:text-slate-200 cursor-pointer' onClick={() => setShowSidebar(!showSidebar)} />)
          : (
            <AiOutlineMenu className='w-12 text-3xl dark:text-slate-200 cursor-pointer' onClick={() => setShowSidebar(!showSidebar)} />
            )}
        <h1 className='text-3xl font-bold dark:text-slate-100 pb-1'>Weather APP</h1>
      </div>
      <Toggle />
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
    </header>
  )
}
