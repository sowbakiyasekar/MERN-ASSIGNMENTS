import { useEffect, useState } from "react"

const DisplayComponent = ({props}) => {
    const [nums,setNums] = useState([])
    useEffect(()=> {
        setNums([])
        for(let i=1;i<=props.number;i++) {
            setNums((prev)=>[...prev,i])
        }
    },[props])
    
  return (
    <>
    <div className="grid gap-5 grid-cols-5">
        { nums.map((e,i)=>(
            <div key={i} style={{color:props.tcolor}}>{e}</div>
        )
        )}
    </div>
    </>
  )
}

export default DisplayComponent