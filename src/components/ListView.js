import ShopItem from '../components/ShopItem'; 
export default function ListView(items) {
  return(
    <div className="list-container">
       {
        items.map((el, i) => {
          return (
            <ShopItem name={el.name} price={el.price} color={el.color} imgSrc={el.img} key={i} />
          )
        })
      }
    </div>
  )
}