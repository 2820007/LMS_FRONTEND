import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Navbar from "./components/ui/Navbar"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Login from "./pages/auth/Login"
import Singup from "./pages/auth/Singup"
import Profile from "./pages/Profile"
import Admin from "./pages/admin/Admin"
import Dashboard from "./pages/admin/Dashboard"
import Course from "./pages/admin/Course"
import CreateCourse from "./pages/admin/CreateCourse"
import UpdateCourse from "./pages/admin/UpdateCourse"
// import Footer from "./components/ui/Footer"

const  App =()=>{
  const router=createBrowserRouter([
    {
      path:"/", element:<> <Navbar/> <Home/> </>
    },
    {
      path:"/courses", element:<> <Navbar/> <Courses/></>
    },
     {
      path:"/login", element:<> <Navbar/> <Login/></>
    },
     {
      path:"/signup", element:<> <Navbar/> <Singup/></>
    },
    
    {
      path:"/profile", element:<> <Navbar/> <Profile/></>
    },

    {
      path:"/admin", element:<> <Navbar/> <Admin/></>,
      children:[
        {
          path:"dashboard" ,
          element:<Dashboard/>
        },
         {
          path:"course" ,
          element:<Course/>
        },
        {
          path:"course/create" ,
          element:<CreateCourse/>
        },
         {
          path:"course/:courseId" ,
          element:<UpdateCourse/>
        },
      ]
    },


  ])
  return(
    <>
    <RouterProvider router={router}/>
    {/* <Footer/> */}
    </>
  )
}
export default App