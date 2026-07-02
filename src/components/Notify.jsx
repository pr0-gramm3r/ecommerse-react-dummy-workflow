import { useContext } from "react"
import NotifyContext from "../context/NotifyContext"

const Notify = () => {
  const {msg_no} = useContext(NotifyContext);
  return (
    <div className="notification">
      <i className="fas fa-bell"></i>
      <p>{msg_no}</p>
    </div>
  )
}

export default Notify
