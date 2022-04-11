import React,{useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
  };
  
  const cartReducer = (state, action) => {
    let updatedItems;   
    if (action.type === 'ADD') {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    // if (action.type === 'REMOVE') {
  
    //   return {
    //     items: updatedItems,
    //     totalAmount: updatedTotalAmount
    //   };
    // }
  
    return defaultCartState;
  };
const CartProvider =(prop)=>{
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
      );
    
      const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
      };
    
      const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
      };
    const cartContext={
        item: cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    return(
    <CartContext.Provider value={cartContext    }>
        {prop.children}
    </CartContext.Provider>
    )
}
export default CartProvider;