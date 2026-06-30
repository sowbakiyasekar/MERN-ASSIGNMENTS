import { useEffect, useState } from "react"

const Day12Two = () => {
    const [count, setCount] = useState(0)
    useEffect(()=> {
        console.log("count Updated")
    },[count])
    const handleClick = () => {
        setCount(count+1)
    }
  return (
    <>
    <p className="font-mono text-2xl">Use Effect On each Count State Update</p>
    <p>{count}</p>
    <button onClick={handleClick}>click me!</button>
    </>
  )
}

export default Day12Two