import React from 'react'
import { FaHome, FaUserCheck } from 'react-icons/fa'
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarFallback } from '../ui/avatar'

interface dashboardProps {
  children: React.ReactNode
}
const Dashboard = ({ children }: dashboardProps) => {
  return (
    <main className='w-full h-screen flex bg-dashboard-bg text-white'>
      <LeftSide />
      <section className='w-2/3 h-full px-8 py-6'>{children}</section>
    </main>
  )
}

const LeftSide = () => {
  return (
    <section className='w-1/6 h-full rounded-xl flex flex-col bg-dashboard-accent gap-4 overflow-auto scrollbar-hide'>
      <div className='flex items-center py-4 pl-3 pr-4 justify-between w-full'>
        <IoIosArrowBack size={20} className='cursor-pointer' />
        <p className='font-semibold capitalize '>footballstory</p>
        <IoIosSettings size={20} className='cursor-pointer' />
      </div>
      <div className='flex flex-col gap-6 items-center'>
        <Avatar className='w-24 h-24  rounded-full '>
          <AvatarFallback>DF</AvatarFallback>
        </Avatar>
        <div className='flex flex-col items-center gap-2'>
          <h2 className='text-2xl '>username</h2>
          <div className='flex gap-4 items-center'>
            <p className='text-sm'>julukan</p>
            <div className='px-2  rounded-lg text-sm bg-white/60'>pro</div>
          </div>
        </div>
        <div className='w-full flex justify-between px-4 gap-6 '>
          <div className='flex gap-2 items-center'>
            <FaUserCheck size={24} />
            <div className='flex flex-col'>
              <p className='text-[14px]'>2.304</p>
              <p className='text-[13px]'>followers</p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <FaUserCheck size={24} />
            <div className='flex flex-col'>
              <p className='text-[14px]'>2.304</p>
              <p className='text-[13px]'>followers</p>
            </div>
          </div>
        </div>
      </div>
      <nav className='flex flex-col gap-3 text-dashboard-text mt-4 capitalize text-sm'>
        <div className='flex gap-4 px-4 w-full items-center'>home</div>
        <div className='flex gap-4 px-4 w-full' >home</div>
        <div className='flex gap-4 px-4 w-full' >home</div>
        <div className='flex gap-4 px-4 w-full' >home</div>
      </nav>
      <div className='flex flex-col gap-4 mt-6'>
        <div className='flex gap-8 items-center text-[10px] pl-4 pr-8 uppercase text-slate-500 justify-between'>
          <p>popular leagues</p>
          <p>4/20</p>
        </div>
        <nav className='flex flex-col gap-2 text-dashboard-text text-sm'>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>
          <div className='flex gap-4 px-4 w-full items-center'>home</div>

        </nav>
      </div>
    </section>
  )
}

export default Dashboard
