import { useNavigate } from "react-router-dom"
import SchoolList from "../pages/SchoolList"
import Home from "../pages/Home"

const SchoolData = () => {
    const navigate = useNavigate()

    const handleDetails = (school) => {
        navigate(`/courses`,{
            state:school
        })
    }

    const schools = [
  {
    id: 1,
    name: "ABC School",
    city: "Chennai",
    principal: "Ramesh",
    students: 2500,
    teachers: 120,
    courses:["LKG", "UKG", "Primary", "High School"] 
  },
  {
    id: 2,
    name: "Green Valley School",
    city: "Coimbatore",
    principal: "Suresh",
    students: 1800,
    teachers: 90,
    courses:["Primary", "High School"] 

  },
  {
    id: 3,
    name: "Sunrise School",
    city: "Madurai",
    principal: "Priya",
    students: 2200,
    teachers: 110,
    courses:["LKG", "UKG", "Primary", "High School"] 

  },
]

const totalStudents = schools.reduce((acc,school)=>acc+school.students,0)
const totalTeachers = schools.reduce((acc,school)=>acc+school.teachers,0)
// console.log(schools.length)

  return (
    <>
    <Home schools={schools} students= {totalStudents} teachers = {totalTeachers}/>
    <SchoolList schools = {schools} handleDetails={handleDetails}/>
    </>
  )
}

export default SchoolData