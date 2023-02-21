export default function ShopCard({ name, price, color, imgSrc }) {

  return (
    <div className="card">
      <div className="card-description">
      <div className="card-name">{name}</div>
      <div className="card-color">{color}</div>
      </div>      
<img className="card-img" src = {imgSrc} alt=" " />
      <div className="card-block">
      <div>${price}</div>
      <button className="card-btn">ADD TO CART</button>  
      </div>
    </div>
  )
} 