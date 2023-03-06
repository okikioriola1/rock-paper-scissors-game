import React, { useState } from 'react'
import './footer.css'
import Modal from './Modal'
const Footer = () => {
   const [modal, setModal] = useState(false)

   const toggle=()=>{
    setModal(!modal)
   }
  return (
    <>
    <footer className='footer'>
        <div className='attribution'>
            Coded by <a href="#">Kikitech</a> &copy; 2021
        </div>
        <button className="rules" onClick={toggle}>Rules</button>
    </footer>
    {modal ? <Modal toggle={toggle}/>: null}
    </>
  )
}

export default Footer