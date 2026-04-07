import React from 'react'
import { Card } from './card'
import { Button } from './button'


const CourseCard = ({course}) => {
  return (
   <Card className="bg-white shadow-lg ">
    <img src={course.image} alt=""  className='w-full h-48 object-cover'/>
    <div className='p-6'>
        <h2 className='text-xl font-semibold text-gray-800mb-3'>{course.title}</h2>
        <p className='text-gray-600 mb-4'>{course.description}</p>
        <Button className="bg-blue-500 hover:bg-blue-600">Learn More</Button>

    </div>


   </Card>
  )
}

export default CourseCard