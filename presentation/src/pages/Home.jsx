import SchoolStatss from "../components/SchoolStatss"
import SchoolList from "./SchoolList"

const Home = ({schools,students,teachers}) => {
  return (
    <>
    <h1>Overall school Stats</h1>
    <div>
        <SchoolStatss schools={schools} students={students} teachers={teachers}/>
    </div>
    <div>
        <SchoolList schools={schools}/>
    </div>
    </>
  )
}

export default Home