import { BiWind, BiCompass, BiSun, BiCloud } from 'react-icons/bi'
import { FaDeaf } from 'react-icons/fa'
import { MdOutlineWaterDrop, MdNightsStay } from 'react-icons/md'
import { BoxCards } from './box-cards'
import { InfoCardWeather } from './info.card.weather'

export const CardWeather = ({ weather }) => {
  return (
    <BoxCards otherClass='space-y-8'>
      <div className='flex items-end justify-center gap-2 sm:gap-4'>
        <span className='text-4xl font-bold text-ellipsis overflow-hidden'>{weather.country}</span>
        <span className='text-2xl mb-0.5 text-gray-600 dark:text-gray-400'>{weather.locationName}</span>
      </div>
      <div className='flex gap-5 justify-center items-center'>
        <span className='text-5xl font-bold'>{weather.temperature}º</span>
        {weather.isDay ? <img className=' w-20 h-20' src={weather.conditionIcon} alt={`${weather.conditionIcon} weather`} /> : <MdNightsStay className='text-gray-600 dark:text-gray-300 text-5xl' />}
      </div>
      <section className='grid grid-cols-2 sm:grid-cols-3 gap-4 bg-neutral-300 bg-opacity-60 p-4 rounded-xl dark:bg-neutral-800'>
        <InfoCardWeather
          icon={<BiWind className='text-3xl' />}
          text='Wind Speed'
          attr={`${weather.windSpeed} kph`}
        />
        <InfoCardWeather
          icon={<BiCompass className='text-3xl' />}
          text='Wind Direction'
          attr={`${weather.windDir}`}
        />
        <InfoCardWeather
          icon={<MdOutlineWaterDrop className='text-3xl' />}
          text='Humidity'
          attr={`${weather.humidity} %`}
        />
        <InfoCardWeather
          icon={<BiSun className='text-3xl' />}
          text='UV'
          attr={`${weather.uv}`}
        />
        <InfoCardWeather
          icon={<FaDeaf className='text-3xl' />}
          text='Pressure'
          attr={`${weather.pressure} inHg`}
        />
        <InfoCardWeather
          icon={<BiCloud className='text-3xl' />}
          text='Cloud Cover'
          attr={`${weather.cloud} %`}
        />
      </section>
    </BoxCards>
  )
}
