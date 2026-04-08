import React from "react";
import { GraduationCap } from "lucide-react";
import { Button } from "./button";

import { AvatarFallback, Avatar, AvatarImage } from "./avatar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);

  const logoutHandler = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/user/logout",
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        navigate("/");
        dispatch(setUser(null));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";

      toast.error(message);
    }
  };
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
            <Link to="/">
              <li className="cursor-pointer hover:bg-gray-500">Home</li>
            </Link>
            <Link to="/courses">
              {" "}
              <li className="cursor-pointer hover:bg-gray-500">Courses</li>
            </Link>
            {!user ? (
              <div className="flex gap-3">
                <Link to="/login">
                  {" "}
                  <Button className="bg-blue-500 hover:bg-blue-600 cursor-pointer">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  {" "}
                  <Button className="bg-gray-700 hover:bg-gray-800 cursor-pointer">
                    Signup
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-7">

                {
                  user?.role ==='instructor' && <Link to="/admin/dashboard"><li className="curser-pointer">Admin</li></Link>
                }



                <Link to="/profile">
                  <Avatar>
                    <AvatarImage src={user.photoUrl} alt="User Avatar" />
                    <AvatarFallback>
                      {user?.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <Button
                  onClick={logoutHandler}
                  className="bg-blue-500 hover:bg-blue-600  cursor-pointer"
                >
                  Logout
                </Button>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
