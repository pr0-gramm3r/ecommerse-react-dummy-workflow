import { useContext } from "react"
import LangContext from "../context/LangContext"

const Lang = () => {

  const {setLang} = useContext(LangContext);

  return (
    <div className="language">
      <div className="eng" onClick={()=> setLang("hey Guest, Welcome to the shop!!")}>
        Eng</div>
      <div className="hin" onClick={()=> setLang("नमस्ते गेस्ट, शॉप में आपका स्वागत है!!")}>
        Hin</div>
    </div>
  )
}

export default Lang
