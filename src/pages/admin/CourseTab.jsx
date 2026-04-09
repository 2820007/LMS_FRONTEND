import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RichTextEditor from "@/components/ui/RichTextEditor";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const CourseTab = () => {
    const navigate=useNavigate()
  return (
    <Card>
      <CardHeader className="flex md:flex-row justify-between">
        <div>
          <CardTitle>Basic Course Information</CardTitle>
          <CardDescription>
            Make changes your courses here. Click save when you're done.
          </CardDescription>
        </div>
        <div className="space-x-2">
          <Button className="bg-gray-800 hover:bg-gray-900 cursor-pointer">Published</Button>
          <Button className="cursor-pointer" variant="destructive">Remove Course</Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4 mt-5">
          <div>
            <Label className="mb-2">Title</Label>
            <Input
              type="text"
              name="courseTitle"
              placeholder="Ex,Fullstack developer"
            />
          </div>
          <div>
            <Label className="mb-2">subTitle</Label>
            <Input
              type="text"
              name="subTitle"
              placeholder="Ex,become a fullstack developer from zero to advance"
            />
          </div>
          <div>
            <Label className="mb-2">Description</Label>
            <RichTextEditor />
          </div>

          <div className="flex md:flex-row flex-wrap gap-1 items-center md:gap-5">
            <div>
              <Label className="mb-2">Category</Label>
              <Select >
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="Nextjs">Nextjs</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Frontend Development">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="Backend Development">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="Mern Stack Development">
                      Mern Stack Development
                    </SelectItem>
                    <SelectItem value="Machine Learning">
                      Machine Learning
                    </SelectItem>
                    <SelectItem value="MongoDb">MongoDb</SelectItem>
                    <SelectItem value="Ui/Ux">Ui/Ux</SelectItem>
                    <SelectItem value="Devops">Devops</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
                <Label className="mb-2">Course Level</Label>
                         <Select >
                            <SelectTrigger className="w-45 bg-white">
                              <SelectValue placeholder="Select a course level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Course Level</SelectLabel>
                                <SelectItem value="Beginner">Beginner</SelectItem>
                                <SelectItem value="Medium">Medium</SelectItem>
                                <SelectItem value="Advance">Advance</SelectItem>
                               
                              </SelectGroup>
                            </SelectContent>
                          </Select>
            </div>
                        <div>
                <Label className="mb-2">Price in (NCR)</Label>
                <Input
                type="number"
                name="coursePrice"
                placeholder="999"
                className="w-fit"
                />
                        
            </div>


            
          </div>
          <div>
                <Label className="mb-4">Course Thumbnail</Label>
                <Input
                type="file"
                name="file"
                id="file"
                
                accept="image/*"
                className="w-fit"
                />
            </div>
            <div className="flex gap-2 ">
                <Button onClick={()=>{
                    navigate("/admin/course")

                }}
                variant="outline"
                className="cursor-pointer"
                
                >Cancel</Button>
                <Button className="bg-gray-800 cursor-pointer">Save</Button>

            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseTab;
