import ShopCard from '../components/ShopCard';
export default function CardsView(cards) {
  return (
    <div className="cards-container">
      {
        cards.map((el, i) => {
          return (
            <ShopCard name={el.name} price={el.price} color={el.color} imgSrc={el.img} key={i} />
          )
        })
      }
    </div>
  )
}