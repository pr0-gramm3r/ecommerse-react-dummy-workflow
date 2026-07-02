
const Card = () => {
  return (
    <div className="card">
        <img src="https://www.bbassets.com/media/uploads/p/l/40119524_1-amul-happy-treats-french-fries.jpg" alt="Amul" />
      <div className="name">
        <p>Amul Happy Treats French Fries, 750 g</p>
      </div>
      <div className="rating">
        <div className="star">4.3 <i className="fas fa-star"></i></div>
        <div className="amount">(10k)</div>
      </div>
      <div className="price">
        <div className="current">₹200</div>
        <div className="past">₹999</div>
        <div className="present">80% off</div>
      </div>
      <div className="btn">
        <button>Add to cart</button>
        <button>Notify Me!</button>
      </div>
    </div>
  )
}

export default Card
