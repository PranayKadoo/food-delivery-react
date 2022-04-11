import { useState } from 'react';
import './App.css';
import Meal from './Component/Meal/Meal';
import Header from './Component/Layout/Header';
import Cart from './Component/Cart/Cart';
import CartProvider from './Component/Store/CartProvider';
function App() {
 const[cartOn,isCartOn] = useState(false)
  const mealList=[{
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },]
  const showCart = () =>{
    isCartOn(true)
  }
  const hideCart = () =>{
    isCartOn(false)
  }
  return (
    <CartProvider>
    <div className="App">
    {cartOn&&<Cart onCartOff={hideCart}/>}
    <Header onCartOn={showCart}/>
    <Meal mealList={mealList}/>
    </div>
    </CartProvider>
  );
}

export default App;
