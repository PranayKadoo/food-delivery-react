import React from 'react'
import CartButton from './CartButton';
import './Header.css';
const Header =(prop)=>{
    return(
        <React.Fragment>
            <div>
            <h1 className='brand'>Reacto Food</h1>
            <CartButton onClick={prop.onCartOn}/>
            </div>
        </React.Fragment>
    )
}

export default Header;  