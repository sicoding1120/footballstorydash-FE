'use client'

import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Badge } from '@nextui-org/badge'
import { IoMdSearch } from 'react-icons/io'

import { IoMdNotifications } from 'react-icons/io'
import Bagde from './badge'
import BadgeElement from './badge'

const Navbar = ({ username }: { username: string }) => {
  return (
    <header className='w-full h-20 px-6 py-2 flex items-center justify-between bg-slate-200'>
      <div className='capitalize text-xl font-bold'>footballstory</div>
      <nav className='flex gap-4 items-center'>
        <BadgeElement
          type='none'
          content={0}
          icon={<IoMdSearch size={25} />}
          color='success'
        />
        <BadgeElement
          content={8}
          icon={<IoMdNotifications size={25} />}
          color='success'
          type='add'
        />
        <div className='flex items-center gap-2'>
          <Avatar className=' uppercase'>
            <AvatarFallback className=''>
              {username.charAt(0) + username.charAt(1)}
            </AvatarFallback>
          </Avatar>
          <p>{username}</p>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
