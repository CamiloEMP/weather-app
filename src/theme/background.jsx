import React from 'react'

export const Background = ({ children }) => {
  return (
    <main className='bg-neutral-200  dark:bg-neutral-900 transition-colors min-h-screen'>
      {children}
    </main>
  )
}
