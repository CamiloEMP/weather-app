import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParamsSearch } from '../hooks/use-params-search'
import { FormRealtime } from '../components/forms-routes/realtime'
import { IoAirplaneOutline } from 'react-icons/io5'
import { BoxCards } from '../components/box-cards'

export const Home = () => {
  const [search, setSearch] = useState('')
  const { typeOfSearch } = useParamsSearch()
  console.log({ typeOfSearch })
  const navigate = useNavigate()
  return (
    <BoxCards otherClass='flex flex-col items-center gap-4 justify-around'>
      <div className='space-y-6'>
        <h2 className='text-5xl dark:text-slate-200 text-center font-bold'>Search a city</h2>
        {typeOfSearch === 'realtime' && <FormRealtime setSearch={setSearch} search={search} />}
        {typeOfSearch === 'forecast' && <div>forecast</div>}
      </div>
      <button
        className='flex items-end gap-2 rounded-lg border-2 border-neutral-600 text-3xl pt-1 px-4 pb-3 font-bold dark:border-neutral-400 disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:cursor-not-allowed cursor-pointer'
        onClick={() => navigate(`${typeOfSearch}/${search}`)}
        disabled={search.length < 2}
      >
        <span>Search</span>
        <IoAirplaneOutline />
      </button>
    </BoxCards>
  )
}
