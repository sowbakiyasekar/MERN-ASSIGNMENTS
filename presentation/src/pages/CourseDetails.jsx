import { useLocation, useParams } from "react-router-dom"

const CourseDetails = () => {
    const location = useLocation()

    const school = location.state
  return (
    <>
    <div className=" flex-row justify-items-center items-center">
      <h1>{school.name}</h1>
      <ul className="flex-row">
    {
        school.courses.map((course) => (
        <li key={course}>{course}</li>
      ))}
      </ul>
    </div>
    </>
  )
}

export default CourseDetails