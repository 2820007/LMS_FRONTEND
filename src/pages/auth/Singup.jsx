import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Singup = () => {
  const navigate=useNavigate()

  const [user,setUser]=useState({
    userName:"",
    userEmail:"",
    userPassword:"",
    role:"student"

  })


  const handleChange=(e)=>{
    const {name,value}=e.target
    setUser((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const handleSubmit= async(e)=>{
    e.preventDefault(),
    console.log(user)
    try {
      
      const response=await axios.post("http://localhost:9000/api/user/register",user,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      })

      if(response.data.success){
        navigate("/login")
        toast.success(response.data.message)
        
      }else{
          toast.error(response.data.message || "Something went wrong");
      }



    } catch (error) {
       const message =
      error.response?.data?.message || "Something went wrong";

    toast.error(message);

      
    }

  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full ">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create Your Account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Join us today! It's quick and easy
        </p>
        <div className="mb-4">
          <Label>Full Name</Label>
          <Input placeholder="enter your name" 
          name="userName"
          value={user.userName}
          onChange={handleChange}
          type="text"
          id="userName"
          />
        </div>
        <div className="mb-4">
          <Label>Email Address</Label>
          <Input placeholder="enter your email address"
           name="userEmail"
          value={user.userEmail}
          onChange={handleChange}
          type="email"
          id="userEmail"
           />
        </div>
        <div className="mb-4">
          <Label>Password</Label>
          <Input placeholder="create your password" 
           name="userPassword"
          value={user.userPassword}
          onChange={handleChange}
          type="password"
          id="userPassword"
          />
        </div>
        <div className="mb-4">
          <Label>Role</Label>
          <RadioGroup  className="flex  gap-4 mt-2">
            <div className="flex items-center gap-3">
              <Input 
              type="radio"
              id="role1"
              name="role"
              value="student"
              checked={user.role ==="student"}
              onChange={handleChange} 
              
              />
              <Label htmlFor="role1">Student</Label>
            </div>
            <div className="flex items-center gap-3">
             <Input 
              type="radio"
              id="role2"
              name="role"
              value="instructor"
              checked={user.role ==="instructor"}
              onChange={handleChange} 
              
              />
              <Label htmlFor="role2">Instructor</Label>
            </div>
          </RadioGroup>
        </div>
        <Button onClick={handleSubmit} className="w-full bg-blue-500 cursor-pointer hover:bg-blue-600">Singup</Button>
        <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link></p>

      </div>
    </div>
  );
};

export default Singup;
