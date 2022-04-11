import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
const Backdrop =(prop)=>{
    return <div className='backdrop' onClick={prop.onClose}/>
}
const ModalOverlay =(prop)=>{
    return(
        <div className='modal'>
            <div className='content'>
                {prop.children}
            </div>
        </div>
    )
}
const portElement= document.getElementById('overlay');
const Modal =(prop)=>{
return(
    <Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={prop.onClose}/>,portElement)}
    {ReactDOM.createPortal(<ModalOverlay>{prop.children}</ModalOverlay>,portElement)}
    </Fragment>
)
}
export default Modal;