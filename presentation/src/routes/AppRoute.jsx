import { Route, Routes } from "react-router-dom"
import SchoolData from "../logics/SchoolData"
import Home from "../pages/Home"
import CourseDetails from "../pages/CourseDetails"

const AppRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/schools" element={<SchoolData/>}/>
        <Route path="/courses" element={<CourseDetails/>}/>
    </Routes>
  )
}

export default AppRoute