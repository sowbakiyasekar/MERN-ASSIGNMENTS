import EmployeeCard from "../components/EmployeeCard"
import Product from "../components/Product"
import StudentProfile from "../components/StudentProfile"
import UserCard from "../components/UserCard"
import UserSkill from "../components/UserSkill"

const DayThree = () => {
    const studentData = {
        name:"Sowbakiya",
        course:"MERN",
        city:"chennai",
        age:29
    }
    const empdata = {
        name:"sowbakiya",
        exp:2,
        dept:"crm",
        salary:40000,
        id:1088

    }
    const productData ={
        name:"delsey cherryRed",
        category:"suitcase",
        price:7000,
        brand:"delsey"
    }
    const skills = ["HTML","CSS","JavaScript","React","Node.js"]
    const userdata = {
        name:"sowbakiya",
        email:"sowbakiya@gamil.com",
        phone:4972123,
        city:"chennai"
    }
    return (
        <>
        <div className="grid grid-cols-3 gap-4 p-2 item-center justify-between ">
        <StudentProfile  studentData = {studentData}/>
        <EmployeeCard data = {empdata}/>
        <Product data= {productData}/>
        <UserSkill skills = {skills}/>
        <UserCard userdata ={userdata}/>
        </div>
        </>
    )
}
export default DayThree