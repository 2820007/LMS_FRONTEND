import React from "react";
import userProfile from "../assets/user.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Profile = () => {
  return (
    <div className=" bg-gray-100 py-12 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto p-8 bg-linear-to-r bg-white shadow-xl rounded-2xl mt-14">
        <div className="flex flex-col items-center md:flex-row md:items-start space-y-8 md:space-y-0 mde:space-x-12 ">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src={userProfile}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* user Info */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-500">Welcome, User</h1>
            <p className="text-lg text-gray-600 mt-3 ">
              <span className="font-bold"> Email:</span>mandalravi@gmail.com
            </p>
            <p className="text-lg text-gray-600">
              {" "}
              <span className="font-bold">Role:</span>Instructor{" "}
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              <span className="font-bold">Bio:</span>
              Add Your Bio
            </p>
            <Dialog>
              <DialogTrigger> <Button className="bg-blue-500 py-3 px-2">Edit Profile</Button></DialogTrigger>
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

                       
                        className="col col-span-3 text-gray-500"
                        />
                    </div>
                </div>
              </DialogContent>
            </Dialog>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
