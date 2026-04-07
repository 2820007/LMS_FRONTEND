import React from "react"
import { GraduationCap} from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "./button"
import { Input } from "./input"
import { Separator } from "./separator"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 pt-12 pb-6 mt-20">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* Logo + Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="text-gray-300 w-8 h-8" />
            <h1 className="text-white text-2xl font-bold">Logo</h1>
          </div>

          <p className="text-sm">
            Sipalaya InfoTech Pvt. Ltd. <br />
            Narephat-32, Koteshwor, Kathmandu
          </p>

          <p className="mt-3 text-sm">
            📧 infotech@sipalaya.com <br />
            📞 9851344071
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="#" className="hover:text-white">Admission</Link></li>
            <li><Link to="#" className="hover:text-white">Placement</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Courses
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Python</li>
            <li>Data Science</li>
            <li>Graphic Design</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Stay Connected
          </h3>

          <div className="flex gap-4 mb-4">
            {/* <Facebook className="cursor-pointer hover:text-white" />
            <Twitter className="cursor-pointer hover:text-white" />
            <Github className="cursor-pointer hover:text-white" /> */}
          </div>

          <p className="text-sm mb-2">Subscribe</p>

          <div className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border-gray-700 text-sm"
            />
            <Button className="bg-blue-500 hover:bg-blue-600">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-6 bg-gray-700" />

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Logo | All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer