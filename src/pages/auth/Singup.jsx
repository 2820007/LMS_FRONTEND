import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import { Link } from "react-router-dom";

const Singup = () => {
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
          <Input placeholder="enter your name" />
        </div>
        <div className="mb-4">
          <Label>Email Address</Label>
          <Input placeholder="enter your email address" />
        </div>
        <div className="mb-4">
          <Label>Password</Label>
          <Input placeholder="create your password" />
        </div>
        <div className="mb-4">
          <Label>Role</Label>
          <RadioGroup defaultValue="option-one" className="flex  gap-4 mt-2">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Student</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Instructor</Label>
            </div>
          </RadioGroup>
        </div>
        <Button className="w-full bg-blue-500 cursor-pointer hover:bg-blue-600">Singup</Button>
        <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link></p>

      </div>
    </div>
  );
};

export default Singup;
