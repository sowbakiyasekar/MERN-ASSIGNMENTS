import { Link } from "react-router-dom"

const DayTwelve = () => {
  return (
    <>
    <div className="justify-items-center p-10"><h1 className="font-mono text-2xl">Day Twelve Use Effect Tasks</h1></div>
    <div className="grid grid-cols-4 gap-30 rounded-2xl justify-items-center p-5">
       <div className="flex bg-pink-200 w-30 h-20 justify-items-center"> <Link to={"/day12One"} >Task 1</Link></div>
        <div className="flex bg-pink-200 w-30 h-20 justify-items-center"> <Link to={"/day12Two"}>Task 2</Link></div>
        <div className="flex bg-pink-200 w-30 h-20 justify-items-center"> <Link to={"/day12Three"}>Task 3</Link></div>
        <div className="flex bg-pink-200 w-30 h-20 justify-items-center"> <Link to={"/day12Four"}>Task 4</Link></div>
       
    </div>
    </>
  )
}

export default DayTwelve