export const InfoCardWeather = ({ icon, text, attr }) => {
  return (
    <div className='flex items-center flex-col w-32 gap-0.5'>
      {icon}
      <span className='text-base'>{attr}</span>
      <span className='text-base text-gray-600 dark:text-gray-400'>{text}</span>
    </div>
  )
}
