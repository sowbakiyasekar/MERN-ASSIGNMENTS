import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="flex  gap-3">
            <img src="sg.png" alt="logo"/>
          <h1 className="text-2xl font-bold">
            School Management
          </h1>
        </div>

        <div className="flex gap-8 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/schools" className="hover:text-yellow-300 transition">Schools</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;