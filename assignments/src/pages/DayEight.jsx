import { useEffect, useState } from "react"
import CounterComp from "../components/CounterComp"
import withCounter from "../hoc/withCounter"
import BackgroundComp from "../components/BackgroundComp"
import MessageComponent from "../components/MessageComponent"
import AuthComponent from "../components/AuthComponent"
import DisplayComponent from "../components/DisplayComponent"

const EnhancedComponent = withCounter(CounterComp)
const BackgroundComponent = withCounter(BackgroundComp)
const MsgComponent = withCounter(MessageComponent)
const AuthComp = withCounter(AuthComponent)
const DisplayComp = withCounter(DisplayComponent)
const DayEight = () => {

// Task 1
const [bg,setBg] = useState("")
const [text, setText]= useState("black")
const handleChange = (e) => {
  if(e.key==="Enter") {
    e.preventDefault()
    setBg(e.target.value)
  }
}
useEffect(()=> {
      if(bg ==="black" || bg=== "brown") {
       setText("white")
     } else {
      setText("black")
     }
  
},[bg])

//Task 2
const [inputString, setInput] = useState("")
const handleInput =(e) => {
    e.preventDefault()
    setInput(e.target.value.toUpperCase())
}

// Task 3
const [counter, setCount]= useState(0)
    const increment = () => {
        // const props=["+"]
        console.log("increment");
        setCount(counter+1);
        
    }
    const decrement = () => {
      if(counter==0) {
        alert("counter cannot be negative")
        return
      }
        console.log("decrement");
        setCount(counter-1);

    }

  //Task 4
  const [userDetail, setUser] = useState({name:"",pass:""})
  const [flag,setFlag] = useState(false)
  const handleLogin = () => {
    setFlag(true)
  }

  //Task 5

  const [num,setNum] = useState(null)
  const [txtcolor, setColor] = useState("black")
  const [todisplay, setDisplay]= useState(false)
  
  return (
    <>
    <div className="flex justify-around p-5 ">

      {/* withBackgroundcolor */}
      <div className="flex-col justify-items-center bg-purple-400 text-black w-40 border-b-cyan-900 p-2 rounded">
        <h1>Task 1</h1>
        <h2>With Background</h2>
        <br></br>
        <input type="text" placeholder="enter bg color" id="bg" onKeyDown={handleChange} className="w-25"/>
        <BackgroundComponent props= {[bg,text]}/>
      </div>

      {/* withUpperCase */}
      <div className="flex-col justify-items-center bg-purple-400 text-black w-40 border-b-cyan-900 p-2 rounded">
        <h1>Task 2</h1>
        <h2>With UpperCase</h2>
        <br></br>
        <input type="text" placeholder="input text" id="inputstring" onChange={handleInput} className="w-25"/>
        <MsgComponent props= {[inputString]}/>
      </div>

      {/* withCounter */}
      <div className="flex-col justify-items-center bg-purple-400 text-black w-40 border-b-cyan-900 p-2 rounded">
        <h1>Task 3</h1>
        <h2>With Counter</h2>
        <br></br>
        <EnhancedComponent props= {[counter]}/>
        <div className="flex gap-2 items-center">
          <button className="bg-purple-900 text-white w-10 rounded m-1" onClick={increment}>+</button>
          <button className="bg-purple-900 text-white w-10 rounded m-1" onClick={decrement}>-</button>
        </div>
      </div>

      {/* withAuthentication */}
      <div className="flex-col justify-items-center bg-purple-400 text-black w-40 border-b-cyan-900 p-2 rounded">
        <h1>Task 4</h1>
        <h2>With Authentication</h2>
        <br></br>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="your name" id="name" value={userDetail.name} onChange={(e)=>{setUser({...userDetail,name:e.target.value})}} className="w-25"/>
        <label htmlFor="pass">Password:</label>
        <input type="text" placeholder="enter password" id="pass" value={userDetail.pass} onChange={(e)=>{setUser({...userDetail,pass:e.target.value})}} className="w-25"/>
        <button className="bg-purple-900 text-white w-20 rounded m-1" onClick={handleLogin}>Login</button>
        { flag && <AuthComp props ={userDetail} /> }
      </div>

      {/* withDisplay */}
      <div className="flex-col justify-items-center bg-purple-400 text-black w-40 border-b-cyan-900 p-2 rounded">
        <h1>Task 5</h1>
        <h2>With Display</h2>
        <br></br>
        <input type="number" placeholder="input number" id="num" onChange={(e)=>{setNum(e.target.value)
                                                                                  setDisplay(false)}} className="w-25"/>
        <input type="text" placeholder="enter bg color" id="txtcolor" onChange={(e)=>{setColor(e.target.value)
                                                                                  setDisplay(false)}} className="w-25"/>
        <button onClick={()=>setDisplay(true)} className="bg-purple-900 text-white w-20 rounded ">OK</button>
        {todisplay && <DisplayComp props={{number:num,tcolor:txtcolor}}/>}
      </div>

    </div>
    </>


  )
}

export default DayEight