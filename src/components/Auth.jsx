import { useContext } from "react"
import AuthContext from "../context/AuthContext"

const Auth = () => {
    const {showlogin} = useContext(AuthContext);
    return (
    <div className="guest"
        style={{display: showlogin ? "flex" : "none"}}
    >
      hey Guest, Welcome to the shop!!
    </div>
  )
}

export default Auth
