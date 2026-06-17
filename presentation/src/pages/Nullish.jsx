import { useState } from "react"

const Nullish = () => {
    const [data,setData]= useState()

  return (
    <>
    <div className="fixed top-30 left-30">
        <h1>checking usestate for null value</h1>
    <h1>the value stored in data is - <b>{data?data:" null"}</b></h1>
    <button className="bg-amber-300 p-3 rounded" onClick={()=>(setData(data?null:"React"))}> toggle </button>
    </div>
    </>
  )
}

export default Nullish