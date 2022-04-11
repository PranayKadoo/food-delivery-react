import React from 'react'
import Modal from '../UI/Modal'

const Cart = (prop) =>{
    const cartItems =null;
    //  <ul>{[{id=1,name='sushi',amount=2,price=10},].map(item=>{
    //     <li>{item.name}</li>
    // })}</ul>
    return(
    <Modal onClose={prop.onCartOff}>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>30</span>
        </div>
        <div>
            <button onClick={prop.onCartOff}>close</button>
            <button>order</button>
        </div>
    </Modal>
    )
}
export default Cart