import { useNavigate } from "react-router-dom"
import SchoolList from "../pages/SchoolList"

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
  return (
    <>
    <SchoolList presentation = {schools} handleDetails={handleDetails}/>
    </>
  )
}

export default SchoolData