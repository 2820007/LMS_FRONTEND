import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import CourseTab from './CourseTab'

const UpdateCourse = () => {
  return (
    <div className='md:p-10 p-4 mt-10 '>
        <div className='flex items-center justify-between mb-5'>
            <h1 className='font-bold text-xl'>Add Details information regarding course</h1>
            <Link to="lecture">
            <Button className="hover:bg-blue-600 bg-blue-500 cursor-pointer">Go to lecture page</Button>
            </Link>

        </div>
        <CourseTab/>
    </div>
  )
}

export default UpdateCourse