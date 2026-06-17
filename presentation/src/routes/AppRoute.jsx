import { Route, Routes } from "react-router-dom"
import SchoolData from "../logics/SchoolData"
import Home from "../pages/Home"
import CourseDetails from "../pages/CourseDetails"
import Nullish from "../pages/Nullish"

const AppRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/schools" element={<SchoolData/>}/>
        <Route path="/courses" element={<CourseDetails/>}/>
        <Route path="/nullish" element={<Nullish/>}/>

    </Routes>
  )
}

export default AppRoute