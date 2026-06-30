import { useEffect, useState } from "react"

const Day12Four = () => {

    const [users,setUser]= useState([])
    const [flag,setFlag]= useState(false)

    useEffect(()=> {
        const fetchUser = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const datas = await response.json()
            // console.log(datas)
            setUser(datas)
        }
        fetchUser()
    },[])

    useEffect(()=> {
        setFlag(true)
        console.log(users)
    },[users])
  return (
    <>
        <div className="font-mono text-2xl p-5">No of users - {users.length}</div>
        <div>{users.name}</div>
        <div className="grid grid-cols-3 gap-5 justify-items-center">
                {flag && users.map((u)=> (
                    <div key={u.id} className=" bg-emerald-500 w-70 justify-items-center border-b-emerald-800 border-2">
                        <table>
                            <tbody>
                        <tr className="text-center">
                            <th>Name</th>
                            <td>{u.name}</td>
                        </tr>
                        <tr className="text-center">
                            <th>Email</th>
                            <td>{u.email}</td>
                        </tr>
                        <tr className="text-center">
                            <th>Company</th>
                            <td>{u.company.name}</td>
                        </tr>
                        <tr className="text-center">
                            <th>Contact</th>
                            <td>{u.phone}</td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                ))}
        </div>
    </>
  )
}

export default Day12Four