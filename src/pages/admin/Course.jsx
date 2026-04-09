import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
 
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCourse } from "@/redux/courseSlice";
import { Badge } from "@/components/ui/badge";
import { Edit } from "lucide-react";



const Course = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {course}=useSelector(store=>store.course)

    useEffect(()=>{
      const getCreatorCourse=async()=>{
        try {
          const res=await axios.get("http://localhost:9000/api/course/creater",{
            withCredentials:true
          })
          if(res.data.success){
            dispatch(setCourse(res.data.courses))

          }
          
        } catch (error) {
          console.log(error)
          
        }
      }
      getCreatorCourse()
    })
  return (
    <div className="md:pt-20 p-4 w-full h-screen ">
      <Button className="bg-blue-500 cursor-pointer" onClick={()=>{
        navigate("create")
      }}>Create Course</Button>
      <Table className="mt-10">
        <TableCaption>A list of your recent courses.</TableCaption>
        <TableHeader >
          <TableRow>
            <TableHead className="w-25">Course</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {course?.map((course) => (
            <TableRow key={course._id}>
              <TableCell className="md:w-75 flex items-center gap-2">{course.courseTitle}</TableCell>
              <TableCell>{course.coursePrice  || "NA"}</TableCell>
               <TableCell className="text-center"><Badge className={course.isPublished? "bg-green-400" :"bg-red-400"}>{course.isPublished ? "Published" :"Draft"}</Badge></TableCell>
               <TableCell className="text-right"><Button onClick={()=>{
                navigate(`/admin/course/${course._id}`)
               }} variant="ghost"><Edit/></Button></TableCell>


            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    </div>
  );
};

export default Course;
