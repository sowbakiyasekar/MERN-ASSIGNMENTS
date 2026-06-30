import { useEffect, useState } from "react"

const Day12Three = () => {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        document.title = `count : ${count}`
    },[count])

    const handleClick = () => {
        setCount(count+1)
    }
  return (
    <>
    <p className="font-mono text-2xl">Use Effect On Browser Title</p>
    <p>{count}</p>
    <button onClick={handleClick}>click me!</button>
    </>
  )
}

export default Day12Three