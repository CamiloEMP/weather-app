import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RiSearchLine } from 'react-icons/ri'
import { IoIosClose } from 'react-icons/io'

export const Home = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  console.log(search)
  return (
    <div>
      <h1 className='text-3xl dark:text-slate-200 text-center'>Busca una lugar</h1>
      <div className='bg-neutral-800 w-80 mx-auto flex items-center gap-4 p-4 rounded-full'>
        <RiSearchLine className='dark:text-gray-400' />
        <input onChange={(e) => setSearch(e.target.value)} className='bg-transparent outline-none' type='text' placeholder='Colombia' />
        <IoIosClose className='dark:text-gray-400' />
      </div>
      <button onClick={() => navigate(`${search}`)}>Buscar</button>
    </div>
  )
}
