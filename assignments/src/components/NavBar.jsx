import { Link } from "react-router-dom"


const NavBar = () => {

  return (
    <div className="bg-orange-400 text-white p-2 flex justify-between items-center w-full fixed top-0 h-20">
      <div className="mx-10 flex item-center gap-2">
        <img src="./books.png" width={30}/>
        <span>MyWorkBook</span>
      </div>
      <div className="mx-10 flex gap-10">
        <Link to={"/"}>Home</Link>
        <Link>Dashboard</Link>
        <Link>Login</Link>
      </div>
    </div>
  )
}

export default NavBar