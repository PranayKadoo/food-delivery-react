import React from 'react'
const Input = React.forwardRef((prop, ref) => {
    return(
        <div className='input'>
            <label htmlFor={prop.input.id}>{prop.label}</label>
            <input ref={ref} {...prop.input} />
        </div>
    )
});
export default Input;
