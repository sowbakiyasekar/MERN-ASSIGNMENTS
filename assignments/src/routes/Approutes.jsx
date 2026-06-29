import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Student from "../pages/Student"
import Employee from "../pages/Employee"
import ProductCard from "../pages/ProductCard"
import MovieDetails from "../pages/MovieDetails"
import CompanyInfo from "../pages/CompanyInfo"
import FullPage from "../pages/FullPage"
import DayThree from "../pages/DayThree"
import LoginPage from "../components/LoginPage"
import DayEight from "../pages/DayEight"
import DayEleven from "../pages/DayEleven"

const Approutes = ()=> {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/product" element={<ProductCard/>}/>
        <Route path="/movie" element={<MovieDetails/>}/>
        <Route path="/company" element={<CompanyInfo/>}/>
        <Route path="/fullpage" element={<FullPage/>}/>
        <Route path="/day3" element={<DayThree/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/day8" element={<DayEight/>}/>
        <Route path="/day11" element={<DayEleven/>}/>


      </Routes>
    </>
  )
}

export default Approutes
