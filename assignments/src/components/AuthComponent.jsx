import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthComponent = ({props}) => {
    const user = props    
    const navigate = useNavigate()

    useEffect(()=> {
        if(user.name && user.pass){
            navigate("/fullpage")
        } else {
            alert("Please Login")
        }
    },[])

return
}

export default AuthComponent