import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const CreateCourse = () => {
    const [loading , setLoading]=useState(false)
    const [courseTitle,setCourseTitle]=useState("")
    const navigate=useNavigate()

    const [category,setCategory]=useState("")

  const getSelectedCategory=(value)=>{
    setCategory(value)
  }


  const createCourseHandler=async()=>{
    try {
      setLoading(true)
      const res=await axios.post("http://localhost:9000/api/course",{
        courseTitle,category
      },
      {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      }
    )

    if(res.data.success){
      navigate("/admin/course")
      toast.success(res.data.message)

    }

      
      
    } catch (error) {
      console.log(error)
      
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="p-20 md:pr-20 h-screen">
      <h1 className="text-2xl font-bold">
        Let's Add <span className="text-blue-500">Courses</span>
      </h1>
      <p className="text-gray-600 ">
        Turn your knowledge into impact. Create a course that inspires,
        educates, and empowers learners around the world.
      </p>

      <div className="mt-10">
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            placeholder="Your Course Name"
            className="bg-white"
            value={courseTitle}
            onChange={(e)=>{
              setCourseTitle(e.target.value)
            }}
          />
        </div>
        <div className="mt-4 mb-5 ">
          <Label>Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-45 bg-white">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="Nextjs">Nextjs</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                <SelectItem value="Backend Development">Backend Development</SelectItem>
                <SelectItem value="Mern Stack Development">Mern Stack Development</SelectItem>
                 <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                  <SelectItem value="MongoDb">MongoDb</SelectItem>
                  <SelectItem value="Ui/Ux">Ui/Ux</SelectItem>
                  <SelectItem value="Devops">Devops</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
            <Button onClick={()=>{
              navigate("/admin/course")
            }} variant="outline" className="cursor-pointer">Cancel</Button>
             <Button onClick={createCourseHandler} disabled={loading} className="bg-blue-500 hover:bg-blue-700 cursor-pointer">Create</Button>

             {
              loading? <><Loader2 className="animate-spin mr-1 h-4 w-4"/> Please wait</>:""
             }

        </div>
      </div>
    </div>
  );
};

export default CreateCourse;