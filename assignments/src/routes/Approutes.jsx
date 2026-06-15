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


      </Routes>
    </>
  )
}

export default Approutes
