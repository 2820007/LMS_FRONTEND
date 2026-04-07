import React from "react";
import { GraduationCap } from "lucide-react";
import { Button } from "./button";

import { AvatarFallback,Avatar, AvatarImage } from "./avatar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-gray-900 z-50 w-full py-3 fixed top-0">
      <div className="max-w-7xl mx-auto flex justify-between">
        {/* logo section */}
        <Link to="/">
        <div className="flex gap-1">
          <GraduationCap className="text-gray-300 w-10 h-10" />
          <h1 className="text-gray-300 text-3xl font-bold">Logo</h1>
        </div>
        </Link>
        {/* Menu section */}
        <nav className="">
          <ul className="flex gap-7 text-xl items-center font-semibold text-white">
            <Link to="/"><li className="cursor-pointer hover:bg-gray-500">Home</li></Link>
           <Link to="/courses"> <li className="cursor-pointer hover:bg-gray-500">Courses</li></Link>
            {!user ? (
              <div className="flex gap-3">
               <Link to="/login"> <Button className="bg-blue-500 hover:bg-blue-600 cursor-pointer">Login</Button></Link>
               <Link to="/signup"> <Button className="bg-gray-700 hover:bg-gray-800 cursor-pointer">Signup</Button></Link>
              </div>
            ) : (
              <div className="flex items-center gap-7">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Button className="bg-blue-500 hover:bg-blue-600  cursor-pointer">Logout</Button>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
