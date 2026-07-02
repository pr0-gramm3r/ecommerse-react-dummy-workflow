import { useContext } from "react"
import ShopContext from "../context/ShopContext"

const Cart = () => {

  const {cart_no} = useContext(ShopContext);

  return (
    <div className="cart">
      <i className="fas fa-shopping-cart"></i>
      <p>{cart_no}</p>
    </div>
  )
}

export default Cart
