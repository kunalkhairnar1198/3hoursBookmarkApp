import React, { Fragment } from 'react'
import  ReactDOM  from 'react-dom'

// const BackDrop =(props)=>{

// }

const ModalOverlay =(props)=>{
  return(
    <div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

const modalPortalElement = document.getElementById('modal-root')
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,modalPortalElement)}
    </Fragment>
  )
}

export default Modal
