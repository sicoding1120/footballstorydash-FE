import React from 'react'
import Navbar from '../elements/navbar'


interface dashboardProps {
    children: React.ReactNode,
    username:string
}
const Dashboard = ({children,username}:dashboardProps) => {
  return (
      <main className='w-full h-screen flex flex-col'>
          <Navbar username={username} />
          <section className='w-full h-full '>
              {children}
          </section>
    </main>
  )
}

export default Dashboard