import { useEffect, useState } from "react"

const Day12One = () => {
    const [dummy, setDummy] = useState(0)
    useEffect(()=>{
        console.log("component loaded!")
    },[])
    const handleClick = () => {
        console.log("state update")
        setDummy(dummy+1)
    }
  return (
    <>
    <p className="font-mono text-2xl">UseEffect empty dependency one time running</p>
    <button onClick={handleClick} className="rounded bg-gray-600">click to update dummy state</button>
    </>
  )
}

export default Day12One