import React from 'react'

const Loaders = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-4 items-center justify-center'>
      <div className='flex-col gap-4 w-full flex items-center justify-center'>
        <div className='w-20 h-20 border-4 border-transparent text-bg2 text-4xl animate-spin flex items-center justify-center border-t-bg2 rounded-full'>
          <div className='w-16 h-16 border-4 border-transparent text-bg1 text-2xl animate-spin flex items-center justify-center border-t-bg1 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default Loaders
