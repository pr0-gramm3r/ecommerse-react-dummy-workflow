import { useContext } from "react";
import NotifyContext from "../context/NotifyContext";

const Card = ({product}) => {
  const { img, name, rating, reviews, current, past, discount } = product;
  const {msg_no, setMsg_no} = useContext(NotifyContext);
  return (
    <div className="card">
        <img src={img} alt="Amul" />
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="rating">
        <div className="star">{rating}<i className="fas fa-star"></i></div>
        <div className="amount">{reviews}</div>
      </div>
      <div className="price">
        <div className="current">₹{current}</div>
        <div className="past">₹{past}</div>
        <div className="present">{discount}</div>
      </div>
      <div className="btn">
        <button>Add to cart</button>
        <button
          onClick={()=> setMsg_no(msg_no + 1)}
          >Notify Me!</button>
      </div>
    </div>
  )
}

export default Card
