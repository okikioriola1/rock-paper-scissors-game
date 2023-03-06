import React from 'react'
import ReactDOM from 'react-dom'
import Close from '../images/icon-close.svg'
import Rules from '../images/image-rules.svg'
import './modal.css'


const Modal = ({toggle}) => {
  return ReactDOM.createPortal(
   <div className='modal-container'>
    <div className='modal-box'>
        <div className='modal__header'>
            <h1>Rules</h1>
            <button className='close-btn' onClick={toggle}>
                <img src={Close} alt="close" className='close-img'/>
            </button>
        </div>
        <img className="rules-img" src={Rules} alt="rules"/>
    </div>
   </div>,
    document.getElementById("modal")
  )
}

export default Modal 