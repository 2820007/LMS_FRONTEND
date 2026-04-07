import CourseCard from '@/components/ui/CourseCard'
import React from 'react'
 // eslint-disable-next-line react-refresh/only-export-components
 export const courses=[
  {
    "id": "c001",
    "title": "Full Stack MERN Development",
    "description": "Learn to build complete web applications using MongoDB, Express, React, and Node.js from scratch.",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    "id": "c002",
    "title": "Frontend Development with React",
    "description": "Master modern frontend development using React, hooks, context API, and responsive UI design.",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
  },
  {
    "id": "c003",
    "title": "Backend Development with Node.js",
    "description": "Build scalable REST APIs using Node.js, Express, authentication, and database integration.",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  },
  {
    "id": "c004",
    "title": "UI/UX Design Fundamentals",
    "description": "Learn design principles, wireframing, prototyping, and user experience best practices.",
    "image": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
  },
  {
    "id": "c005",
    "title": "JavaScript Mastery",
    "description": "Deep dive into JavaScript concepts including ES6+, closures, async programming, and DOM manipulation.",
    "image": "https://images.unsplash.com/photo-1593720213428-28a5b9e94613"
  },
  {
    "id": "c006",
    "title": "Python for Beginners",
    "description": "Start programming with Python, covering basics, data structures, and simple projects.",
    "image": "https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
  },
  {
    "id": "c007",
    "title": "Database Design with MongoDB",
    "description": "Learn NoSQL database concepts, schema design, aggregation, and performance optimization.",
    "image": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d"
  },
  {
    "id": "c008",
    "title": "DevOps Basics",
    "description": "Understand CI/CD pipelines, Docker, cloud deployment, and infrastructure basics.",
    "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1"
  },
  {
    "id": "c009",
    "title": "Mobile App Development with React Native",
    "description": "Build cross-platform mobile apps using React Native with real-world projects.",
    "image": "https://images.unsplash.com/photo-1551650975-87deedd944c3"
  },
  {
    "id": "c010",
    "title": "Data Structures & Algorithms",
    "description": "Prepare for interviews with essential DSA concepts, problem-solving techniques, and coding practice.",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
]

const Courses = () => {
 
  return (
    <div className='bg-gray-100 pt-14'>
      <div className='min-h-screen max-w-7xl mx-auto py-10'>
        <div className='px-4'>
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-4'>Our Courses</h1>
          <p className='text-center text-gray-600 mb-12'>Explore our curated courses to boost your skills and career. Wheather you're a beginner or an expert,we have something for everyone.</p>
          <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              courses?.map((course)=>{
               return <CourseCard key={courses.id} course={course}/>

              })
            }

          </div>
        </div>

      </div>
    </div>
  )
}

export default Courses