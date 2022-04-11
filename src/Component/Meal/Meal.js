import React,{useContext} from 'react';
import CartContext from '../Store/cart-context';
import './Meal.css';
import AddToCart from './AddToCart';
const Meal =(prop)=>{
    const cartCtx=useContext(CartContext);
    const cartHandler =(amount)=>{
        cartCtx.addItem({
            id:prop.id,
            name:prop.name,
            price:prop.price,
            amount:amount
        })
    }
    const meals = prop.mealList;
    return(
   meals.map((item)=>{
       return <ul key={item.id} className='meal__list'>
        <li>{item.name}</li>
       <li>{item.description}</li>
       <li>{item.price}</li>
       <AddToCart name={item.name} price={item.price} onCartHandler={cartHandler}/>
       </ul>})
    )
}
export default Meal;