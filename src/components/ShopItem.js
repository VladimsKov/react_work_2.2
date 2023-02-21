export default function ShopItem({ name, price, color, imgSrc }) {
  return (
    <div className="card-item">
      <img className="item-img" src={imgSrc}/>
      <div className="item-name">{name}</div>
      <div className="item-color">{color}</div>
      <div className="item-price">${price}</div>
      <button className="item-btn">ADD TO CART</button> 
    </div>
  )
}
  