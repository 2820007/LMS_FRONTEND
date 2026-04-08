import React, { useState } from "react";
import userProfile from "../assets/user.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Profile = () => {
     const dispatch=useDispatch()
      const {user}=useSelector(store=>store.auth)
      const [input,setInput]=useState({
        userName:user?.userName,
        description:user?.description,
        file:user?.photoUrl
      })

      const [loading,setLoading]=useState(false)


      const changeEventHandler=(e)=>{
        const {name,value}=e.target
        setInput((prev)=>({
          ...prev,
          [name]:value
        }))
      }

      const changeFileHandler=(e)=>{
      setInput({
        ...input,
        file:e.target.files?.[0]
      })

      
    }
const submitHandler=async(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append("userName",input.userName)
        formData.append("description",input.description)
        if(input?.file){
          formData.append("file",input?.file)
        }
        try {
          setLoading(true)
          const res=await axios.put("http://localhost:9000/api/user/profile/update",formData,{
            headers:{
              "Content-Type":"multipart/form-data"
            }
            ,withCredentials:true
          })

          if(res.data.success){
            toast.success(res.data.message)
            dispatch(setUser(res.data.user))
          }else{
                      toast.error(res.data.message || "Something went wrong");
                  }
          
        } catch (error) {
          const message =
                  error.response?.data?.message || "Something went wrong";
            
                toast.error(message);
          
        }finally{
          setLoading(false)
        }

      }
        
  return (
    <div className=" bg-gray-100 py-12 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto p-8 bg-linear-to-r bg-white shadow-xl rounded-2xl mt-14">
        <div className="flex flex-col items-center md:flex-row md:items-start space-y-8 md:space-y-0 mde:space-x-12 ">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src={user?.photoUrl|| userProfile}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* user Info */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-500">Welcome, {user?.userName.split(" ")[0] || "User" }</h1>
            <p className="text-lg text-gray-600 mt-3 ">
              <span className="font-bold"> Email:</span>{user?.userEmail || "Email not available"}
            </p>
            <p className="text-lg text-gray-600">
              {" "}
              <span className="font-bold">Role:</span>{user?.role ||"role not defined"}
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              <span className="font-bold">Bio:</span>
              {
                user?.description ||"Add Your Bio"
              }
              
            </p>
            <Dialog>
              <DialogTrigger> <Button className="bg-blue-500 py-3 px-2 hover:bg-blue-600 cursor-pointer ">Edit Profile</Button></DialogTrigger>
              <DialogContent className="sm:max-w-106.25">
                <DialogHeader>
                  <DialogTitle className="text-center">Are you absolutely sure?</DialogTitle>
                  <DialogDescription className="text-center">
                    Make changes to your profile here.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="userName" className="text-right">
                            Name
                        </Label>
                        <Input id="userName"
                        name="userName"
                        value={input.userName}
                        onChange={changeEventHandler}
                        className="col col-span-3 text-gray-500"
                        />
                    </div>

                </div>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input id="description"
                        name="description"
                         value={input.description}
                         onChange={changeEventHandler}
                        className="col col-span-3 text-gray-500"
                        />
                    </div>
                </div>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="file" className="text-right">
                            Picture
                        </Label>
                        <Input 
                        id="picture"
                        type="file"
                        accept="image/*"
                        onChange={changeFileHandler}

                       
                        className="w-56.75"
                        />
                    </div>
                </div>

                <DialogFooter>
                  {
                    loading? <Button className="bg-blue-400"><Loader2 className="mr-2 w-4 h-4 animate-spin"/> Please wait</Button>
                    :<Button onClick={submitHandler} className="bg-blue-500 hover:bg-blue-600 cursor-pointer">Save Changes</Button>

                  }
                  
                </DialogFooter>
              </DialogContent>
            </Dialog>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
