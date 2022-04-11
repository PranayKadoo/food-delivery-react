import React,{ useContext } from 'react'
import CartContext from '../Store/cart-context';
const CartButton = (prop) =>{
    const cartctx = useContext(CartContext);
    
    const cartAmount = cartctx.item.reduce((result,current)=>{
        return result + current.totalAmount;
    },0)
    return(
        <button onClick={prop.onClick}>
        <span>cart</span>
         <span className='badge'>{cartAmount}</span>
         </button>
    )
}

export default CartButton;