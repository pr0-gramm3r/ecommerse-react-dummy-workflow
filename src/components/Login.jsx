import { useContext } from "react"
import AuthContext from "../context/AuthContext"

const Login = () => {

  const {setShowlogin} = useContext(AuthContext);
  return (
    <div className="auth" onClick={()=> setShowlogin(true)}>
      <h3>Login <i className="fas fa-sign-in-alt"></i></h3>
    </div>
  )
}

export default Login
