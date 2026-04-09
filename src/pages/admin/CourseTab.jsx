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
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setCourse } from "@/redux/courseSlice";
import { Loader2 } from "lucide-react";

const CourseTab = () => {
  const params = useParams();
  const id = params.courseId;
  const dispatch=useDispatch()
  const {course}=useSelector(store=>store.course)
  const [loading,setLoading]=useState(false)
  const selectCourse=course.find(course =>course._id ===id)
  const [selectedCourse,setSelectedCourse]=useState(selectCourse)
  const navigate = useNavigate();
  // const [selectedCourse, setSelectedCourse] = useState("");

  const getCourseById = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`http://localhost:9000/api/course/${id}`, {
        withCredentials: true,
      });
      if (res.data.success) {
        setSelectedCourse(res.data.course);
      }
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    getCourseById();
  }, []);

  const [input, setInput] = useState({
    courseTitle: selectedCourse?.courseTitle,
    subTitle: selectedCourse?.subTitle,
    description: selectedCourse?.description,
    category: selectedCourse?.category,
    courseThumbnail: selectedCourse?.courseThumbnail,
    courseLevel: selectedCourse?.courseLevel,
    coursePrice: selectedCourse?.coursePrice,
    file: "",
  });

  const [preview, setPreview] = useState(selectedCourse?.courseThumbnail);

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const selectCategory = (value) => {
    setInput({
      ...input,
      category: value,
    });
  };
  const selectCourseLevel = (value) => {
    setInput({
      ...input,
      courseLevel: value,
    });
  };

  // get file

  const selectThumbnail = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({
        ...input,
        courseThumbnail: file,
      });

      const fileReader = new FileReader();
      fileReader.onloadend = () => setPreview(fileReader.result);
      fileReader.readAsDataURL(file);
    }
  };

  const updateCoursehandler = async () => {
    const formData = new FormData();
    formData.append("courseTitle", input.courseTitle);
    formData.append("subTitle", input.subTitle);
    formData.append("description", input.description);
    formData.append("category", input.category);
    formData.append("courseLevel", input.courseLevel);
    formData.append("coursePrice", input.coursePrice);
    formData.append("file", input.courseThumbnail);

    try {
      setLoading(true)
      const res=await axios.put(`http://localhost:9000/api/course/${id}`,formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true
      })
      if(res.data.success){
        navigate("lecture")
        toast.success(res.data.message)
        dispatch([...course,setCourse(res.data.course)])

      }
      
    } catch (error) {
      console.log(error)
      
    } finally{
      setLoading(false)
    }
  };

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
          <Button className="bg-gray-800 hover:bg-gray-900 cursor-pointer">
            Published
          </Button>
          <Button className="cursor-pointer" variant="destructive">
            Remove Course
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4 mt-5">
          <div>
            <Label className="mb-2">Title</Label>
            <Input
              type="text"
              name="courseTitle"
              value={input.courseTitle}
              onChange={changeEventHandler}
              placeholder="Ex,Fullstack developer"
            />
          </div>
          <div>
            <Label className="mb-2">subTitle</Label>
            <Input
              type="text"
              name="subTitle"
              value={input.subTitle}
              onChange={changeEventHandler}
              placeholder="Ex,become a fullstack developer from zero to advance"
            />
          </div>
          <div>
            <Label className="mb-2">Description</Label>
            <RichTextEditor input={input} setInput={setInput} />
          </div>

          <div className="flex md:flex-row flex-wrap gap-1 items-center md:gap-5">
            <div>
              <Label className="mb-2">Category</Label>
              <Select
                defaultValue={input.category}
                onValueChange={selectCategory}
              >
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
              <Select
                defaultValue={input.courseLevel}
                onValueChange={selectCourseLevel}
              >
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
                value={input.coursePrice}
                onChange={changeEventHandler}
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
              onChange={selectThumbnail}
              accept="image/*"
              className="w-fit"
            />

            {preview && (
              <img src={preview} alt="thumbnail" className="w-64 my-2" />
            )}
          </div>
          <div className="flex gap-2 ">
            <Button
              onClick={() => {
                navigate("/admin/course");
              }}
              variant="outline"
              className="cursor-pointer"
            >
              Cancel
            </Button>
            <Button onClick={updateCoursehandler} disabled={loading} className="bg-gray-800 cursor-pointer">
              {
                loading ?(
                  <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin"/>
                  Please wait
                  </>

                ):("Save")
              }
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseTab;
