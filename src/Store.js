import { useState } from "react";
import { products } from './productsData';
import IconSwitch from './components/IconSwitch';
import CardsView from './components/CardsView';
import ListView from './components/ListView';

export default function Store() {
  const [view, setView] = useState('view_module');
  let cardContainer = null;
  const onSwitch = () => {
  (view === 'view_list')? setView('view_module') : setView('view_list');
  };
  if (view === 'view_list') {
   cardContainer = ListView; 
  } else {
    cardContainer = CardsView;
  }
  return (
    <div className="container">
      <IconSwitch icon={view} onSwitch={onSwitch}/>
      {cardContainer(products)}
    </div>
  )
}