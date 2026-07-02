import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const Theme = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div className="theme">
        <div className={theme === "white"? "active" : ""}
          onClick={()=> setTheme("light")}
          >
            Light
        </div>
        <div className={theme === "black" ? "active" : ""}
        onClick={()=> setTheme("dark")}
        >Dark</div>
    </div>
  )
}

export default Theme
