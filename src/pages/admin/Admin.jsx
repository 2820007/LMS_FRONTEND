import SideBar from '@/components/ui/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='flex min-h-screen'>
      
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className='flex-1 p-6'>
        <Outlet />
      </div>

    </div>
  )
}

export default Admin