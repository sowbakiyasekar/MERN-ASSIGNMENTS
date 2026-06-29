import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const DayEleven = () => {
    const navigate = useNavigate()
    const [user,setUser]= useState({userName:"",age:"",city:"",email:"",password:"",confirmPass:""})

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"))
        if (storedUser) {
            setUser(storedUser)
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem("user",JSON.stringify(user))

        alert("User saved successfully!")
        navigate("/fullpage")
    }

    return (
    <>
    <div className=" bg-emerald-200 m-50 h-100 rounded flex justify-around">
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-around items-center">
        <h1 className="font-mono text-2xl">Registration Form</h1>
        <div className="flex gap-10 items-center">
        <label htmlFor="name" className="font-mono text-xl">Name</label>
        <input className="w-40 border-2 rounded border-amber-800 " type="text" placeholder="Enter your name" id="name" value={user.userName} onChange={(e)=> {
            setUser((saved)=>({
                ...saved,
                userName:e.target.value
            }))
        }}/>
        </div>
        <div className="flex gap-10 items-center">
        <label htmlFor="age" className="font-mono text-xl">Age</label>
        <input className="w-40 border-2 rounded border-amber-800 " type="number" placeholder="Enter your age" id="age" value={user.age} onChange={(e)=> {
            setUser((saved)=>({
                ...saved,
                age:e.target.value
            }))
        }}/>      
        </div>
        <div className="flex gap-10 items-center">  
        <label htmlFor="city" className="font-mono text-xl">City</label>
        <input className="w-40 border-2 rounded border-amber-800 " type="text" placeholder="Enter your city" id="city" value={user.city} onChange={(e)=> {
            setUser((saved)=>({
                ...saved,
                city:e.target.value
            }))
        }}/>
        </div>
        <div className="flex gap-10 items-center">
        <label htmlFor="email" className="font-mono text-xl">Email</label>
        <input className="w-40 border-2 rounded border-amber-800 " type="text" placeholder="Enter your email" id="email" value={user.email} onChange={(e)=> {
            setUser((saved)=>({
                ...saved,
                email:e.target.value
            }))
        }}/>
        </div>
        <div className="flex gap-10 items-center">
        <label htmlFor="password" className="font-mono text-xl">Password</label>
        <input className="w-40 border-2 rounded border-amber-800 " type="text" placeholder="Enter your password" id="password" value={user.password} onChange={(e)=> {
            setUser((saved)=>({
                ...saved,
                password:e.target.value
            }))
        }}/>
        </div>
        <div className="flex gap-10 items-center">
        <label htmlFor="checkPass" className="font-mono text-xl">Confirm Password</label>
        <input className="w-40 rounded border-amber-800 border-2" type="text" placeholder="Re-enter password" id="checkPass" value={user.confirmPass} onChange={(e)=> {
            setUser((saved)=>({
                ...saved,
                confirmPass:e.target.value
            }))
        }}/>
        </div>
    
        <button type = "submit" className="font-mono text-xl">register</button>
    </form>
    </div> 
    </>
  )
}

export default DayEleven