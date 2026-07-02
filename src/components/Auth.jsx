import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import LangContext from "../context/LangContext";

const Auth = () => {
    const {showlogin} = useContext(AuthContext);
    const {lang} = useContext(LangContext);
    return (
    <div className="guest"
        style={{display: showlogin ? "flex" : "none"}}
    >
      {lang}
    </div>
  )
}

export default Auth
