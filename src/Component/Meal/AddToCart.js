import React,{useRef} from 'react'
import Input from '../UI/Input';
const AddToCart = (prop) =>{
    const amountInputRef = useRef();
    const submitHandler = (event) =>{
    event.preventDefault();
    const cartAmount = amountInputRef.current.value;
    const cartAmountNaumber = +cartAmount;
    prop.onCartHandler(cartAmountNaumber);
    }
    return(
       <form onClick={submitHandler}>
        <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + prop.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+Add</button>
       {/* <h1>{amountInputRef}</h1> */}
       </form>
    )
}

export default AddToCart;